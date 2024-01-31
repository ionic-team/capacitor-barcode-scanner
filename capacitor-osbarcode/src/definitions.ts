export type OSBarcodeScanOptions = { 
  hint: OSBarcodeTypeHint,
  scanInstructions: string,
  scanButton: string,
  scanText: string, // has no mapping to web
  cameraDirection: OSBarcodeCameraDirection // map to facingMode in web -- 1: environment, 2: user
  scanOrientation: OSBarcodeScanOrientation,
  android: {
    scanningLibrary: OSBarcodeAndroidScanningLibrary,
  },
  web: {
    showCameraSelection: boolean,
    scannerFPS: number
  }
}

export enum OSBarcodeCameraDirection {
  BACK = 1,
  FRONT = 2
}

export enum OSBarcodeScanOrientation {
  PORTRAIT = 1,
  LANDSCAPE = 2,
  ADAPTIVE = 3
}

export enum OSBarcodeTypeHint {
  QR_CODE=  0,
  AZTEC = 1,
  CODABAR = 2,
  CODE_39 = 3,
  CODE_93 = 4,
  CODE_128 = 5,
  DATA_MATRIX = 6,
  MAXICODE = 7,
  ITF = 8,
  EAN_13 = 9,
  EAN_8 = 10,
  PDF_417 = 11,
  RSS_14 = 12,
  RSS_EXPANDED = 13,
  UPC_A = 14,
  UPC_E = 15,
  UPC_EAN_EXTENSION = 16,
  ALL = 17
}

export enum OSBarcodeAndroidScanningLibrary {
  ZXING = 'zxing',
	MLKIT = 'mlkit'
}

export type OSBarcodeScanResult = { ScanResult: string };

export interface OSBarcodePlugin {
  scanBarcode(options: OSBarcodeScanOptions): Promise<OSBarcodeScanResult>;
}
