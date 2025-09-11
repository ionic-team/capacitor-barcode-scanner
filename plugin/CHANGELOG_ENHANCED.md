# Changelog - Enhanced Version

## [2.1.1] - 2025-01-03

### ✨ Enhanced Features
- **Camera Direction for Web**: Fixed and improved camera front/back selection for web platform
- **Structured Implementation**: Added proper static constants and state management
- **Type Safety**: Enhanced with proper enum usage instead of magic numbers

### 🔧 Technical Improvements
- Added `_FORWARD` and `_BACK` static constants for consistent camera mode definition
- Added persistent `_facingMode` property with proper state management
- Consistent camera direction application across all scanner configurations
- Fixed broken camera direction logic that was previously ignored in video constraints

### 🐛 Bug Fixes
- Fixed web camera direction not working due to `facingMode: undefined` in video constraints
- Resolved inconsistent camera direction application between different parts of the scanner

### 📝 Implementation Details
```typescript
// Before (broken):
facingMode: options.cameraDirection === 1 ? 'environment' : 'user'  // Logic existed
videoConstraints: { facingMode: undefined }  // But was ignored!

// After (working):
private static _FORWARD = { facingMode: 'user' };
private static _BACK = { facingMode: 'environment' };
private _facingMode = CapacitorBarcodeScannerWeb._BACK;

// Proper enum-based setting:
this._facingMode = options.cameraDirection === CapacitorBarcodeScannerCameraDirection.BACK 
    ? CapacitorBarcodeScannerWeb._BACK 
    : CapacitorBarcodeScannerWeb._FORWARD;

// Applied consistently everywhere:
videoConstraints: { facingMode: this._facingMode.facingMode }
```

### 🚀 Usage
```typescript
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerCameraDirection } from '@enzo/capacitor-barcode-scanner';

// Use back camera (default)
await CapacitorBarcodeScanner.scanBarcode({
  hint: CapacitorBarcodeScannerTypeHint.ALL,
  cameraDirection: CapacitorBarcodeScannerCameraDirection.BACK
});

// Use front camera
await CapacitorBarcodeScanner.scanBarcode({
  hint: CapacitorBarcodeScannerTypeHint.ALL,
  cameraDirection: CapacitorBarcodeScannerCameraDirection.FRONT
});
```

---
Based on [@capacitor/barcode-scanner@2.1.0](https://github.com/ionic-team/capacitor-barcode-scanner) by OutSystems
