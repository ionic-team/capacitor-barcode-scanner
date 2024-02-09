import { Html5QrcodeSupportedFormats } from "html5-qrcode";

/**
 * Enum representing the direction of the camera to be used for barcode scanning.
 */
export enum OSBarcodeCameraDirection {
  BACK = 1,
  FRONT = 2
}

/**
 * Enum representing the orientation of the scanner during barcode scanning.
 */
export enum OSBarcodeScanOrientation {
  PORTRAIT = 1,
  LANDSCAPE = 2,
  ADAPTIVE = 3
}

/**
 * Enum representing a special option to indicate that all barcode types are supported.
 */
export enum OSBarcodeTypeHintALLOption {
  ALL = 17
}

/**
 * Extends supported formats from Html5Qrcode with a special 'ALL' option,
 * indicating support for all barcode types.
 */
export const OSBarcodeTypeHint = {
  ...Html5QrcodeSupportedFormats,
  ...OSBarcodeTypeHintALLOption
}

/**
 * Type definition combining Html5QrcodeSupportedFormats and OSBarcodeTypeHintALLOption
 * to represent the hint for the type of barcode to be scanned.
 */
export type OSBarcodeTypeHint = Html5QrcodeSupportedFormats | OSBarcodeTypeHintALLOption;

/**
 * Enum representing the library to be used for barcode scanning on Android devices.
 */
export enum OSBarcodeAndroidScanningLibrary {
  ZXING = 'zxing',
  MLKIT = 'mlkit'
}

/**
 * Defines the structure of the result returned from a barcode scan.
 */
export type OSBarcodeScanResult = { ScanResult: string };

/**
 * Defines the options for configuring a barcode scan.
 */
export type OSBarcodeScanOptions = { 
  hint: OSBarcodeTypeHint,
  scanInstructions?: string,
  scanButton?: string,
  scanText?: string,
  cameraDirection?: OSBarcodeCameraDirection,
  scanOrientation?: OSBarcodeScanOrientation,
  android?: {
    scanningLibrary?: OSBarcodeAndroidScanningLibrary,
  },
  web?: {
    showCameraSelection?: boolean,
    scannerFPS?: number
    scannerElement: HTMLElement | null
  }
}

/**
 * Interface defining the contract for a plugin capable of scanning barcodes.
 * Requires implementation of the scanBarcode method, which initiates a barcode scan with given options.
 */
export interface OSBarcodePlugin {
  scanBarcode(options: OSBarcodeScanOptions): Promise<OSBarcodeScanResult>;
}
