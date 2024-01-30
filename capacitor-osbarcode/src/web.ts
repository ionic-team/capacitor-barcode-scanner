import { WebPlugin } from '@capacitor/core';

import type { 
  OSBarcodePlugin, 
  OSBarcodeScanOptions,
  OSBarcodeScanResult 
} from './definitions';

export class OSBarcodeWeb extends WebPlugin implements OSBarcodePlugin {
  
  async scanBarcode(options: OSBarcodeScanOptions): Promise<OSBarcodeScanResult> {
    const str = 'ECHO: ' + JSON.stringify(options);
    console.log(str);
    return { ScanResult: str };
  }
}
