import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState } from 'react';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';

const Home: React.FC = () => {
  const [scannerResult, setScannerResult] = useState<string>('No Data...');

  const scanBarcode = async () => {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: CapacitorBarcodeScannerTypeHint.ALL
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
        <div style={{marginTop: '5px'}}></div>
        <IonInput value={scannerResult} label="Scanner Result" labelPlacement="floating" readonly={true} fill="outline" placeholder="No Data..."></IonInput>
        <IonButton onClick={scanBarcode}>Scan</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
