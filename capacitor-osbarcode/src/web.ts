import { WebPlugin } from '@capacitor/core';

import type { OSBarcodePlugin } from './definitions';

export class OSBarcodeWeb extends WebPlugin implements OSBarcodePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
