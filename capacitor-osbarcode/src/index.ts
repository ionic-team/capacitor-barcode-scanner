import { registerPlugin } from '@capacitor/core';

import type { OSBarcodePlugin } from './definitions';

const OSBarcode = registerPlugin<OSBarcodePlugin>('OSBarcode', {
  web: () => import('./web').then(m => new m.OSBarcodeWeb()),
});

export * from './definitions';
export { OSBarcode };
