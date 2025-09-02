import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';
import { useState } from 'react';
import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerAndroidScanningLibrary,
  CapacitorBarcodeScannerCameraDirection,
  CapacitorBarcodeScannerScanOrientation,
  CapacitorBarcodeScannerTypeHint,
} from '@capacitor/barcode-scanner';
import { Capacitor } from '@capacitor/core';

const Home: React.FC = () => {
  const [scannerResult, setScannerResult] = useState<string>('No Data...');

  const [hint, setHint] = useState(CapacitorBarcodeScannerTypeHint.ALL);
  const [scanInstructions, setScanInstructions] = useState("Please scan a barcode");
  const [scanButton, setScanButton] = useState(false);
  const [scanText, setScanText] = useState("Scan");
  const [cameraDirection, setCameraDirection] = useState<CapacitorBarcodeScannerCameraDirection>(CapacitorBarcodeScannerCameraDirection.BACK);
  const [scanOrientation, setScanOrientation] = useState<CapacitorBarcodeScannerScanOrientation>(CapacitorBarcodeScannerScanOrientation.ADAPTIVE);
  const [androidScanningLibrary, setAndroidScanningLibrary] = useState<CapacitorBarcodeScannerAndroidScanningLibrary>(CapacitorBarcodeScannerAndroidScanningLibrary.ZXING);
  const [webShowCameraSelection, setWebShowCameraSelection] = useState(false);
  const [webScannerFPS, setWebScannerFPS] = useState(50);

  const scanBarcode = async () => {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: hint,
        scanInstructions: scanInstructions,
        scanButton: scanButton,
        scanText: scanText,
        cameraDirection: cameraDirection,
        scanOrientation: scanOrientation,
        android: {
          scanningLibrary: androidScanningLibrary
        }
      });
      setScannerResult(result.ScanResult);
    } catch (error) {
      if (error instanceof Error) {
        setScannerResult("Error: " + error.message);
      } else {
        setScannerResult("Error: Unknown error");
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Barcode Scanner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ marginTop: '25px' }}></div>
        <IonInput value={scannerResult} label="Scanner Result" labelPlacement="floating" readonly={true} fill="outline" placeholder="No Data..."></IonInput>
        <IonButton onClick={scanBarcode}>Scan</IonButton>
        <div style={{ marginTop: '50px' }}></div>

        <IonList>
          <IonItem>
            <IonLabel>Scan Hint</IonLabel>
            <IonSelect
              value={hint}
              onIonChange={(e) => setHint(e.detail.value)}
            >
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.ALL}>All</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.QR_CODE}>QR Code</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.AZTEC}>Aztec</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.CODABAR}>Codabar</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.CODE_39}>Code 39</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.CODE_93}>Code 93</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.CODE_128}>Code 128</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.DATA_MATRIX}>Data Matrix</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.MAXICODE}>MaxiCode</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.ITF}>ITF</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.EAN_13}>EAN-13</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.EAN_8}>EAN-8</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.PDF_417}>PDF-417</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.RSS_14}>RSS-14</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.RSS_EXPANDED}>RSS Expanded</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.UPC_A}>UPC-A</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.UPC_E}>UPC-E</IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerTypeHint.UPC_EAN_EXTENSION}>UPC/EAN Extension</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonInput
              label="Scan Instructions"
              labelPlacement="floating"
              value={scanInstructions}
              onIonInput={(e) => setScanInstructions(e.detail.value!)}
              placeholder="Enter scan instructions"
            />
          </IonItem>

          <IonItem>
            <IonLabel>Show Scan Button</IonLabel>
            <IonToggle
              checked={scanButton}
              onIonChange={(e) => setScanButton(e.detail.checked)}
            />
          </IonItem>

          {scanButton && (<IonItem>
            <IonInput
              label="Scan Button Text"
              labelPlacement="floating"
              value={scanText}
              onIonInput={(e) => setScanText(e.detail.value!)}
              placeholder="Enter button text"
            />
          </IonItem>)}

          <IonItem>
            <IonLabel>Camera Direction</IonLabel>
            <IonSelect
              value={cameraDirection}
              onIonChange={(e) => setCameraDirection(e.detail.value)}
            >
              <IonSelectOption value={CapacitorBarcodeScannerCameraDirection.BACK}>
                Back
              </IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerCameraDirection.FRONT}>
                Front
              </IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Scan Orientation</IonLabel>
            <IonSelect
              value={scanOrientation}
              onIonChange={(e) => setScanOrientation(e.detail.value)}
            >
              <IonSelectOption value={CapacitorBarcodeScannerScanOrientation.PORTRAIT}>
                Portrait
              </IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerScanOrientation.LANDSCAPE}>
                Landscape
              </IonSelectOption>
              <IonSelectOption value={CapacitorBarcodeScannerScanOrientation.ADAPTIVE}>
                Adaptive
              </IonSelectOption>
            </IonSelect>
          </IonItem>

          {Capacitor.getPlatform() === 'android' && (
            <IonItem>
              <IonLabel>Android Scanning Library</IonLabel>
              <IonSelect
                value={androidScanningLibrary}
                onIonChange={(e) => setAndroidScanningLibrary(e.detail.value)}
              >
                <IonSelectOption value={CapacitorBarcodeScannerAndroidScanningLibrary.ZXING}>
                  ZXing
                </IonSelectOption>
                <IonSelectOption value={CapacitorBarcodeScannerAndroidScanningLibrary.MLKIT}>
                  ML Kit
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          )}

          {Capacitor.getPlatform() === 'web' && (
            <>
              <IonItem>
                <IonLabel>Show Camera Selection</IonLabel>
                <IonToggle
                  checked={webShowCameraSelection}
                  onIonChange={(e) => setWebShowCameraSelection(e.detail.checked)}
                />
              </IonItem>

              <IonItem>
                <IonInput
                  type="number"
                  label="Scanner FPS"
                  value={webScannerFPS}
                  onIonInput={(e) => setWebScannerFPS(parseInt(e.detail.value!))}
                  placeholder="Enter FPS"
                />
              </IonItem>
            </>
          )}
        </IonList>

        <div style={{ marginTop: '50px' }}></div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
