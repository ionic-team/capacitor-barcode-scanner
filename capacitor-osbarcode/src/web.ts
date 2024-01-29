import { WebPlugin } from '@capacitor/core';

import type { 
  OSBarcodePlugin, 
  OSBarcodeScanOptions, 
  OSBarcodeScanOptionsLegacy, 
  OSBarcodeScanResult 
} from './definitions';

export class OSBarcodeWeb extends WebPlugin implements OSBarcodePlugin {
  
  async scanBarcode(options: OSBarcodeScanOptions): Promise<OSBarcodeScanResult> {
    const str = 'ECHO: ' + JSON.stringify(options);
    console.log(str);
    return { ScanResult: str };
  }

  async scan(options: OSBarcodeScanOptionsLegacy): Promise<OSBarcodeScanResult> {
    return await this.scanBarcode({ ...options, androidScanningLibrary: 'ZXing' });
  }
}
