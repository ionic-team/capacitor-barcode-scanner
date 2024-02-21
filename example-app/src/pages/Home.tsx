import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState } from 'react';
import { OSBarcode, OSBarcodeTypeHint, OSBarcodeCameraDirection, OSBarcodeScanOrientation, OSBarcodeAndroidScanningLibrary } from '@capacitor/barcode';

const Home: React.FC = () => {
  const [scannerResult, setScannerResult] = useState<string>('No Data...');

  const openScanner = async () => {
    const result = await OSBarcode.scanBarcode({
      hint: OSBarcodeTypeHint.ALL,
      scanInstructions: 'Please scan a barcode',
      scanButton: 'Scan', // TODO: Not implemented yet in the web implementation
      scanText: 'SCAN TEXT', // TODO: Not implemented yet in the web implementation
      cameraDirection: OSBarcodeCameraDirection.BACK, 
      scanOrientation: OSBarcodeScanOrientation.PORTRAIT, // TODO: Not implemented yet in the web implementation
      android: {
        scanningLibrary: OSBarcodeAndroidScanningLibrary.MLKIT,
      },
      web: {
        showCameraSelection: false, // TODO: Not implemented yet in the web implementation
        scannerFPS: 30,
        scannerElement: document.getElementById('scanContainer')
      }
    });
    setScannerResult(result.ScanResult);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
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
        <IonButton onClick={openScanner}>Scan</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
