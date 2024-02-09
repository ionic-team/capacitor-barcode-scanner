import { registerPlugin } from '@capacitor/core';

import type { OSBarcodePlugin } from './definitions'; // Importing the interface for type checking.
import { applyCss, barcodeScannerCss } from './utils'; // Import utilities for applying CSS.

/**
 * Registers the `OSBarcode` plugin with Capacitor.
 * For web platforms, it applies necessary CSS for the barcode scanner and dynamically imports the web implementation.
 * This allows for lazy loading of the web code only when needed, optimizing overall bundle size.
 */
const OSBarcode = registerPlugin<OSBarcodePlugin>('OSBarcode', {
  web: () => {
    applyCss(barcodeScannerCss); // Apply the CSS styles necessary for the web implementation of the barcode scanner.
    return import('./web').then(m => new m.OSBarcodeWeb()) // Dynamically import the web implementation and instantiate it.
  },
});

export * from './definitions'; // Re-export all exports from the definitions file.
export { OSBarcode }; // Export the OSBarcode plugin for use in Capacitor projects.

