import { WebPlugin } from "@capacitor/core";
import type { Html5QrcodeResult } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";

import type {
  CapacitorBarcodeScannerPlugin,
  CapacitorBarcodeScannerOptions,
  CapacitorBarcodeScannerScanResult,
} from "./definitions";
import {
  CapacitorBarcodeScannerError,
  CapacitorBarcodeScannerErrorCode,
  CapacitorBarcodeScannerScanOrientation,
  CapacitorBarcodeScannerTypeHint,
} from "./definitions";

/**
 * Implements OSBarcodePlugin to provide web functionality for barcode scanning.
 */
export class CapacitorBarcodeScannerWeb
  extends WebPlugin
  implements CapacitorBarcodeScannerPlugin
{
  private scanner: Html5Qrcode | null = null;

  private scannerStarted = false;
  /**
   * Stops the barcode scanner and hides its UI.
   * @private
   * @returns {Promise<void>} A promise that resolves when the scanner has stopped and its UI is hidden.
   */
  private async stopAndHideScanner(): Promise<void> {
    try {
      if (this.scanner && this.scannerStarted) {
        await this.scanner.stop();
      }
    } catch {
      // Ignore stop errors
    }

    try {
      await this.scanner?.clear();
    } catch {
      // Ignore cleanup errors
    }

    this.scanner = null;
    this.scannerStarted = false;

    const dialog = document.getElementById(
      "cap-os-barcode-scanner-container-dialog",
    );

    if (dialog) {
      dialog.style.display = "none";
    }
  }

  /**
   * Builds the HTML elements necessary for the barcode scanner UI.
   * This method checks if the scanner container exists before creating it to avoid duplicates.
   * It also sets up the close button to stop and hide the scanner on click.
   * @private
   */
  private buildScannerElement(): void {
    if (document.getElementById("cap-os-barcode-scanner-container")) {
      document.getElementById("cap-os-barcode-scanner-container")!.className =
        "scanner-container-display";
      return;
    }
    // Create and configure scanner container elements
    const caposbarcodescannercontainer = document.body.appendChild(
      document.createElement("div"),
    );
    caposbarcodescannercontainer.id = "cap-os-barcode-scanner-container";
    const caposbarcodescannercontainerdialog = document.createElement("div");
    caposbarcodescannercontainerdialog.id =
      "cap-os-barcode-scanner-container-dialog";
    caposbarcodescannercontainerdialog.className = "scanner-dialog";

    // Inner dialog elements including the close button and scanner view
    const caposbarcodescannercontainerdialoginner =
      document.createElement("div");
    caposbarcodescannercontainerdialoginner.className = "scanner-dialog-inner";

    const caposbarcodescannercontainerdialoginnerclose =
      document.createElement("span");
    caposbarcodescannercontainerdialoginnerclose.id =
      "cap-os-barcode-scanner-close-button";
    caposbarcodescannercontainerdialoginnerclose.className = "close-button";
    caposbarcodescannercontainerdialoginnerclose.innerHTML = "&times;";
    caposbarcodescannercontainerdialoginner.appendChild(
      caposbarcodescannercontainerdialoginnerclose,
    );

    const caposbarcodescannercontainerdialoginnercontainerp =
      document.createElement("p");
    caposbarcodescannercontainerdialoginnercontainerp.innerHTML = "&nbsp;";
    caposbarcodescannercontainerdialoginner.appendChild(
      caposbarcodescannercontainerdialoginnercontainerp,
    );

    const caposbarcodescannercontainerdialoginnercontainer =
      document.createElement("div");
    caposbarcodescannercontainerdialoginnercontainer.className =
      "scanner-container-full-width";
    caposbarcodescannercontainerdialoginnercontainer.id =
      "cap-os-barcode-scanner-container-scanner";
    caposbarcodescannercontainerdialoginner.appendChild(
      caposbarcodescannercontainerdialoginnercontainer,
    );

    caposbarcodescannercontainerdialog.appendChild(
      caposbarcodescannercontainerdialoginner,
    );
    caposbarcodescannercontainer.appendChild(
      caposbarcodescannercontainerdialog,
    );
  }

  /**
   * Initiates a barcode scan using the user's camera and HTML5 QR code scanner.
   * Displays the scanner UI and waits for a scan to complete or fail.
   * @param {OSBarcodeScanOptions} options Configuration options for the scan, including camera direction and UI preferences.
   * @returns {Promise<OSBarcodeScanResult>} A promise that resolves with the scan result or rejects with an error.
   */
  async scanBarcode(
    options: CapacitorBarcodeScannerOptions,
  ): Promise<CapacitorBarcodeScannerScanResult> {
    this.buildScannerElement();

    document.getElementById(
      "cap-os-barcode-scanner-container-dialog",
    )!.style.display = "block";
    return new Promise((resolve, reject) => {
      const param = {
        facingMode: options.cameraDirection === 1 ? "environment" : "user",
        hasScannerButton: false,
        scanButton:
          options.scanButton === undefined ? false : options.scanButton,
        showScanLine: false,
        scanInstructions: options.scanInstructions
          ? options.scanInstructions
          : "",
        orientation: options.scanOrientation
          ? options.scanOrientation
          : CapacitorBarcodeScannerScanOrientation.PORTRAIT,
        showCameraSelection: options.web?.showCameraSelection
          ? options.web.showCameraSelection
          : false,
        typeHint: options.hint === 17 ? undefined : options.hint,
        scannerFPS: options.web?.scannerFPS ? options.web.scannerFPS : 50,
      };

      let alreadyCancelled = false;
      const closeButton = document.getElementById(
        "cap-os-barcode-scanner-close-button",
      );
      if (closeButton) {
        closeButton.onclick = async () => {
          if (alreadyCancelled) return;
          alreadyCancelled = true;
          await this.stopAndHideScanner();
          reject(
            new CapacitorBarcodeScannerError(
              CapacitorBarcodeScannerErrorCode.SCAN_CANCELLED,
              "Scan cancelled by user.",
            ),
          );
        };
      }

      // Set up and start the scanner
      const scannerElement = document.getElementById(
        "cap-os-barcode-scanner-container-scanner",
      );
      if (!scannerElement) {
        throw new Error("Scanner Element is required for web");
      }

      this.scanner = new Html5Qrcode(scannerElement.id, {
        formatsToSupport:
          param.typeHint !== undefined ? [param.typeHint] : undefined,
        verbose: undefined,
      });
      const Html5QrcodeConfig = {
        fps: param.scannerFPS,
        qrbox: scannerElement.getBoundingClientRect().width * (9 / 16) - 10,
        aspectRatio: 16 / 9,
        videoConstraints: {
          focusMode: "continuous",
          height: { min: 576, ideal: 1920 },
          deviceId: undefined,
          facingMode: param.facingMode,
        },
      };

      // Success and error callbacks for the scanner
      const OSBarcodeWebScannerSuccessCallback = (
        decodedText: string,
        decodedResult: Html5QrcodeResult,
      ) => {
        this.stopAndHideScanner();
        resolve({
          ScanResult: decodedText,
          format:
            decodedResult.result.format?.format ??
            CapacitorBarcodeScannerTypeHint.ALL,
        });
      };

      const OSBarcodeWebScannerErrorCallback = (error: string) => {
        const allowedErrors = [
          "NotFoundException",
          "No barcode or QR code detected",
          "No MultiFormat Readers were able to detect the code",
        ];

        if (!allowedErrors.find((e) => error.indexOf(e) !== -1)) {
          this.stopAndHideScanner();
          console.error(`[Scanner Web Error] ${error}`);
          reject(error);
        }
      };

      this.scanner
        .start(
          { facingMode: param.facingMode },
          Html5QrcodeConfig,
          OSBarcodeWebScannerSuccessCallback,
          OSBarcodeWebScannerErrorCallback,
        )
        .then(() => {
          this.scannerStarted = true;
        })
        .catch(async (error: unknown) => {
          await this.stopAndHideScanner();

          if (alreadyCancelled) {
            return;
          }

          alreadyCancelled = true;

          reject(this.mapScannerError(error));
        });
    });
  }

  private mapScannerError(error: unknown): Error {
    const message = error instanceof Error ? error.message : String(error);

    if (
      message.includes("NotAllowedError") ||
      message.includes("Permission denied")
    ) {
      return new CapacitorBarcodeScannerError(
        CapacitorBarcodeScannerErrorCode.CAMERA_PERMISSION_DENIED,
        "Camera permission denied.",
        error,
      );
    }

    if (
      message.includes("NotFoundError") ||
      message.includes("Requested device not found")
    ) {
      return new CapacitorBarcodeScannerError(
        CapacitorBarcodeScannerErrorCode.CAMERA_NOT_FOUND,
        "No camera available.",
        error,
      );
    }

    if (
      message.includes("NotReadableError") ||
      message.includes("TrackStartError")
    ) {
      return new CapacitorBarcodeScannerError(
        CapacitorBarcodeScannerErrorCode.CAMERA_ALREADY_IN_USE,
        "Camera is already in use.",
        error,
      );
    }

    return new CapacitorBarcodeScannerError(
      CapacitorBarcodeScannerErrorCode.UNKNOWN,
      message,
      error,
    );
  }
}
