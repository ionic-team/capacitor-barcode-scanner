import { registerPlugin } from '@capacitor/core';

import {
  CapacitorBarcodeScannerCameraDirection,
  CapacitorBarcodeScannerScanOrientation,
  type CapacitorBarcodeScannerOptions,
  type CapacitorBarcodeScannerPlugin,
  type CapacitorBarcodeScannerScanResult,
} from './definitions'; // Importing the interface for type checking.
import { applyCss, barcodeScannerCss } from './utils'; // Import utilities for applying CSS.

/**
 * Registers the `OSBarcode` plugin with Capacitor.
 * For web platforms, it applies necessary CSS for the barcode scanner and dynamically imports the web implementation.
 * This allows for lazy loading of the web code only when needed, optimizing overall bundle size.
 */
const CapacitorBarcodeScannerImpl = registerPlugin<CapacitorBarcodeScannerPlugin>('CapacitorBarcodeScanner', {
  web: () => {
    applyCss(barcodeScannerCss); // Apply the CSS styles necessary for the web implementation of the barcode scanner.
    return import('./web').then((m) => new m.CapacitorBarcodeScannerWeb()); // Dynamically import the web implementation and instantiate it.
  },
});

class CapacitorBarcodeScanner {
  public static async scanBarcode(options: CapacitorBarcodeScannerOptions): Promise<CapacitorBarcodeScannerScanResult> {
    options.scanInstructions = options.scanInstructions || ' '; // Ensure scanInstructions is at least a space.
    options.scanButton = options.scanButton || false; // Set scanButton to false if not provided.
    options.scanText = options.scanText || ' '; // Ensure scanText is at least a space.
    options.cameraDirection = options.cameraDirection || CapacitorBarcodeScannerCameraDirection.BACK; // Set cameraDirection to 'BACK' if not provided.
    options.scanOrientation = options.scanOrientation || CapacitorBarcodeScannerScanOrientation.ADAPTIVE; // Set scanOrientation to 'ADAPTIVE' if not provided.
    return CapacitorBarcodeScannerImpl.scanBarcode(options);
  }
}

export { CapacitorBarcodeScanner }; // Export the `CapacitorBarcodeScanner` class.
export * from './definitions'; // Re-export all exports from the definitions file.
