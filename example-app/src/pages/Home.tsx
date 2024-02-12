import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { OSBarcode, OSBarcodeAndroidScanningLibrary, OSBarcodeCameraDirection, OSBarcodeScanOrientation, OSBarcodeTypeHint } from '@capacitor/barcode';
import './Home.css';

const Home: React.FC = () => {
  const scanBarcode = async () => {
    try {
      const result = await OSBarcode.scanBarcode({
        hint: OSBarcodeTypeHint.ALL, 
        scanInstructions: "Hold your device over the barcode to scan.",
        scanButton: true,
        scanText: "Scanning...",
        cameraDirection: OSBarcodeCameraDirection.BACK,
        scanOrientation: OSBarcodeScanOrientation.ADAPTIVE,
        android: {
          scanningLibrary: OSBarcodeAndroidScanningLibrary.MLKIT,
        },
        web: {
          showCameraSelection: true,
          scannerFPS: 30
        }
      });
      console.log('Scan result:', result);
    } catch (error) {
      console.error('Error scanning barcode:', error);
      alert('Error scanning barcode. Please try again.');
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
            <IonTitle size="large">Barcode Scanner</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={scanBarcode}>Scan Barcode</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
