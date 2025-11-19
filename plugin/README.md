# @capacitor/barcode-scanner

Capacitor plugin using Outsystems Barcode libs

## Install

```bash
npm install @capacitor/barcode-scanner
npx cap sync
```

#### Android

The barcode scanner plugin requires a minimum Android SDK target of 26. This is higher than the default that comes with your Capacitor application. You can update this value in your `android/variables.gradle` file.

```gradle
ext {
    minSdkVersion = 26
}
```

Note: Android with `ZXING` scanning library supports all formats, while `MLKIT` supports all except `MAXICODE`, `RSS_14`, `RSS_EXPANDED` and `UPC_EAN_EXTENSION` - using one of these in `hint` will default to scanning any format.

#### iOS

The barcode scanner uses the camera on the device. Ensure you configure the Privacy - Camera Usage Description in your Info.plist file so that your application can access the device's camera.

Note: iOS supports all formats except `MAXICODE` and `UPC_EAN_EXTENSION` - using them in `hint` will default to scanning any format. Also, Apple Vision does not distinguish between `UPC_A` and `EAN_13`, so specifying one of these in `hint` will allow to scan both.

---

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
scanBarcode(options: CapacitorBarcodeScannerOptions) => Promise<CapacitorBarcodeScannerScanResult>
```

| Param         | Type                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#capacitorbarcodescanneroptions">CapacitorBarcodeScannerOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#capacitorbarcodescannerscanresult">CapacitorBarcodeScannerScanResult</a>&gt;</code>

--------------------


### Type Aliases


#### CapacitorBarcodeScannerScanResult

Defines the structure of the result returned from a barcode scan.

<code>{ ScanResult: string; format: <a href="#capacitorbarcodescannertypehint">CapacitorBarcodeScannerTypeHint</a>; }</code>


#### CapacitorBarcodeScannerTypeHint

Extends supported formats from Html5Qrcode with a special 'ALL' option,
indicating support for all barcode types.
Type definition combining <a href="#html5qrcodesupportedformats">Html5QrcodeSupportedFormats</a> and OSBarcodeTypeHintALLOption
to represent the hint for the type of barcode to be scanned.

<code><a href="#html5qrcodesupportedformats">Html5QrcodeSupportedFormats</a> | <a href="#capacitorbarcodescannertypehintalloption">CapacitorBarcodeScannerTypeHintALLOption</a></code>


#### CapacitorBarcodeScannerOptions

Defines the options for configuring a barcode scan.

<code>{ hint: <a href="#capacitorbarcodescannertypehint">CapacitorBarcodeScannerTypeHint</a>; scanInstructions?: string; scanButton?: boolean; scanText?: string; cameraDirection?: <a href="#capacitorbarcodescannercameradirection">CapacitorBarcodeScannerCameraDirection</a>; scanOrientation?: <a href="#capacitorbarcodescannerscanorientation">CapacitorBarcodeScannerScanOrientation</a>; android?: { scanningLibrary?: <a href="#capacitorbarcodescannerandroidscanninglibrary">CapacitorBarcodeScannerAndroidScanningLibrary</a>; }; web?: { showCameraSelection?: boolean; scannerFPS?: number; }; }</code>


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


#### CapacitorBarcodeScannerTypeHintALLOption

| Members   | Value           |
| --------- | --------------- |
| **`ALL`** | <code>17</code> |


#### CapacitorBarcodeScannerCameraDirection

| Members     | Value          |
| ----------- | -------------- |
| **`BACK`**  | <code>1</code> |
| **`FRONT`** | <code>2</code> |


#### CapacitorBarcodeScannerScanOrientation

| Members         | Value          |
| --------------- | -------------- |
| **`PORTRAIT`**  | <code>1</code> |
| **`LANDSCAPE`** | <code>2</code> |
| **`ADAPTIVE`**  | <code>3</code> |


#### CapacitorBarcodeScannerAndroidScanningLibrary

| Members     | Value                |
| ----------- | -------------------- |
| **`ZXING`** | <code>"zxing"</code> |
| **`MLKIT`** | <code>"mlkit"</code> |

</docgen-api>
