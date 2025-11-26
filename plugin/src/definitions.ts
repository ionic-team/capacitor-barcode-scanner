import { Html5QrcodeSupportedFormats } from "html5-qrcode";

/**
 * Enum representing the direction of the camera to be used for barcode scanning.
 */
export enum CapacitorBarcodeScannerCameraDirection {
  BACK = 1,
  FRONT = 2,
}

/**
 * Enum representing the orientation of the scanner during barcode scanning.
 */
export enum CapacitorBarcodeScannerScanOrientation {
  PORTRAIT = 1,
  LANDSCAPE = 2,
  ADAPTIVE = 3,
}

/**
 * Enum representing a special option to indicate that all barcode types are supported.
 */
export enum CapacitorBarcodeScannerTypeHintALLOption {
  ALL = 17,
}

/**
 * Extends supported formats from Html5Qrcode with a special 'ALL' option,
 * indicating support for all barcode types.
 */
export const CapacitorBarcodeScannerTypeHint = {
  ...Html5QrcodeSupportedFormats,
  ...CapacitorBarcodeScannerTypeHintALLOption,
};

/**
 * Type definition combining Html5QrcodeSupportedFormats and OSBarcodeTypeHintALLOption
 * to represent the hint for the type of barcode to be scanned.
 */

export type CapacitorBarcodeScannerTypeHint =
  | Html5QrcodeSupportedFormats
  | CapacitorBarcodeScannerTypeHintALLOption;

/**
 * Enum representing the library to be used for barcode scanning on Android devices.
 */
export enum CapacitorBarcodeScannerAndroidScanningLibrary {
  ZXING = "zxing",
  MLKIT = "mlkit",
}

/**
 * Defines the structure of the result returned from a barcode scan.
 */
export type CapacitorBarcodeScannerScanResult = {
  ScanResult: string;
  format: CapacitorBarcodeScannerTypeHint;
};

/**
 * Defines the options for configuring a barcode scan.
 */
export type CapacitorBarcodeScannerOptions = {
  hint: CapacitorBarcodeScannerTypeHint;
  scanInstructions?: string;
  scanButton?: boolean;
  scanText?: string;
  cameraDirection?: CapacitorBarcodeScannerCameraDirection;
  scanOrientation?: CapacitorBarcodeScannerScanOrientation;
  android?: {
    scanningLibrary?: CapacitorBarcodeScannerAndroidScanningLibrary;
  };
  web?: {
    showCameraSelection?: boolean;
    scannerFPS?: number;
  };
};

/**
 * Interface defining the contract for a plugin capable of scanning barcodes.
 * Requires implementation of the scanBarcode method, which initiates a barcode scan with given options.
 *
 * Starting in Android targetSdk 36, the scanOrientation parameter has no effect for large screens (e.g. tablets) on Android 16 and higher.
 * You may opt-out of this behavior in your app by adding `<property android:name="android.window.PROPERTY_COMPAT_ALLOW_RESTRICTED_RESIZABILITY" android:value="true" />` to your `AndroidManifest.xml` inside `<application>` or `<activity>`.
 * Keep in mind though that this opt-out is temporary and will no longer work for Android 17. Android discourages setting specific orientations for large screens.
 * Regular Android phones are unaffected by this change.
 * For more information check the Android docs at https://developer.android.com/about/versions/16/behavior-changes-16#adaptive-layouts
 *
 */
export interface CapacitorBarcodeScannerPlugin {
  scanBarcode(
    options: CapacitorBarcodeScannerOptions,
  ): Promise<CapacitorBarcodeScannerScanResult>;
}
