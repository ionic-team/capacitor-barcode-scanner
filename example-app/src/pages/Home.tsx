import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState } from 'react';
import { OSBarcode, OSBarcodeTypeHint, OSBarcodeCameraDirection, OSBarcodeScanOrientation, OSBarcodeAndroidScanningLibrary } from '@capacitor/barcode';

const Home: React.FC = () => {
  const [scannerResult, setScannerResult] = useState<string>('No Data...');

  const scanBarcode = async () => {
    const result = await OSBarcode.scanBarcode({
      hint: OSBarcodeTypeHint.ALL,
      scanInstructions: 'Hold your device over the barcode to scan.',
      scanButton: true, // TODO: Not implemented yet in the web implementation
      scanText: 'Scanning...', // TODO: Not implemented yet in the web implementation
      cameraDirection: OSBarcodeCameraDirection.BACK, 
      scanOrientation: OSBarcodeScanOrientation.ADAPTIVE, // TODO: Not implemented yet in the web implementation
      android: {
        scanningLibrary: OSBarcodeAndroidScanningLibrary.MLKIT,
      },
      web: {
        showCameraSelection: false, // TODO: Not implemented yet in the web implementation
        scannerFPS: 30
      }
    });
    setScannerResult(result.ScanResult);
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
        <div style={{marginTop: '5px'}}></div>
        <IonInput value={scannerResult} label="Scanner Result" labelPlacement="floating" readonly={true} fill="outline" placeholder="No Data..."></IonInput>
        <IonButton onClick={scanBarcode}>Scan</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
