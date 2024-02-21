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

Interface defining the contract for a plugin capable of scanning barcodes.
Requires implementation of the scanBarcode method, which initiates a barcode scan with given options.

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

Defines the options for configuring a barcode scan.

<code>{ hint: <a href="#osbarcodetypehint">OSBarcodeTypeHint</a>, scanInstructions?: string, scanButton?: boolean, scanText?: string, cameraDirection?: <a href="#osbarcodecameradirection">OSBarcodeCameraDirection</a>, scanOrientation?: <a href="#osbarcodescanorientation">OSBarcodeScanOrientation</a>, android?: { scanningLibrary?: <a href="#osbarcodeandroidscanninglibrary">OSBarcodeAndroidScanningLibrary</a>, }, web?: { showCameraSelection?: boolean, scannerFPS?: number } }</code>


#### OSBarcodeTypeHint

Extends supported formats from Html5Qrcode with a special 'ALL' option,
indicating support for all barcode types.
Type definition combining <a href="#html5qrcodesupportedformats">Html5QrcodeSupportedFormats</a> and OSBarcodeTypeHintALLOption
to represent the hint for the type of barcode to be scanned.

<code><a href="#html5qrcodesupportedformats">Html5QrcodeSupportedFormats</a> | <a href="#osbarcodetypehintalloption">OSBarcodeTypeHintALLOption</a></code>


#### OSBarcodeScanResult

Defines the structure of the result returned from a barcode scan.

<code>{ ScanResult: string }</code>


### Enums


#### Html5QrcodeSupportedFormats

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


#### OSBarcodeTypeHintALLOption

| Members   | Value           |
| --------- | --------------- |
| **`ALL`** | <code>17</code> |


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
