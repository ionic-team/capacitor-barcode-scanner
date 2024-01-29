export type OSBarcodeScanOptions = { 
  value: string, 
  androidScanningLibrary: 'ZXing' | 'MLKit' 
}

export type OSBarcodeScanOptionsLegacy = Omit<OSBarcodeScanOptions, 'androidScanningLibrary'>;

export type OSBarcodeScanResult = { ScanResult: string };

export interface OSBarcodePlugin {
  scanBarcode(options: OSBarcodeScanOptions): Promise<OSBarcodeScanResult>;
  scan(options: OSBarcodeScanOptionsLegacy): Promise<OSBarcodeScanResult>;
}
