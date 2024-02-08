# @capacitor/barcode

Capacitor plugin using Outsystems Barcode libs

## Install

```bash
npm install @capacitor/barcode
npx cap sync
```

## API

<docgen-index>

* [`scanBarcode(...)`](#scanbarcode)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### scanBarcode(...)

```typescript
scanBarcode(options: OSBarcodeScanOptions) => any
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#osbarcodescanoptions">OSBarcodeScanOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### Type Aliases


#### OSBarcodeScanOptions

<code>{ hint: <a href="#osbarcodetypehint">OSBarcodeTypeHint</a>, scanInstructions: string, scanButton: boolean, scanText: string, // has no mapping to web cameraDirection: <a href="#osbarcodecameradirection">OSBarcodeCameraDirection</a> // map to facingMode in web -- 1: environment, 2: user scanOrientation: <a href="#osbarcodescanorientation">OSBarcodeScanOrientation</a>, android: { scanningLibrary: <a href="#osbarcodeandroidscanninglibrary">OSBarcodeAndroidScanningLibrary</a>, }, web: { showCameraSelection: boolean, scannerFPS: number } }</code>


#### OSBarcodeScanResult

<code>{ ScanResult: string }</code>


### Enums


#### OSBarcodeTypeHint

| Members                 | Value           |
| ----------------------- | --------------- |
| **`QR_CODE`**           | <code>0</code>  |
| **`AZTEC`**             | <code>1</code>  |
| **`CODABAR`**           | <code>2</code>  |
| **`CODE_39`**           | <code>3</code>  |
| **`CODE_93`**           | <code>4</code>  |
| **`CODE_128`**          | <code>5</code>  |
| **`DATA_MATRIX`**       | <code>6</code>  |
| **`MAXICODE`**          | <code>7</code>  |
| **`ITF`**               | <code>8</code>  |
| **`EAN_13`**            | <code>9</code>  |
| **`EAN_8`**             | <code>10</code> |
| **`PDF_417`**           | <code>11</code> |
| **`RSS_14`**            | <code>12</code> |
| **`RSS_EXPANDED`**      | <code>13</code> |
| **`UPC_A`**             | <code>14</code> |
| **`UPC_E`**             | <code>15</code> |
| **`UPC_EAN_EXTENSION`** | <code>16</code> |
| **`ALL`**               | <code>17</code> |


#### OSBarcodeCameraDirection

| Members     | Value          |
| ----------- | -------------- |
| **`BACK`**  | <code>1</code> |
| **`FRONT`** | <code>2</code> |


#### OSBarcodeScanOrientation

| Members         | Value          |
| --------------- | -------------- |
| **`PORTRAIT`**  | <code>1</code> |
| **`LANDSCAPE`** | <code>2</code> |
| **`ADAPTIVE`**  | <code>3</code> |


#### OSBarcodeAndroidScanningLibrary

| Members     | Value                |
| ----------- | -------------------- |
| **`ZXING`** | <code>'zxing'</code> |
| **`MLKIT`** | <code>'mlkit'</code> |

</docgen-api>
