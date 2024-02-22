import Foundation
import Capacitor
import OSBarcodeLib

@objc(OSBarcodePlugin)
public class OSBarcodePlugin: CAPPlugin {
    var manager: OSBARCManagerProtocol?
    
    public override func load() {
        guard let viewController = self.bridge?.viewController else {
            CAPLog.print("Error (Barcode Plugin Load): Capacitor bridge or viewController is not initialized.")
            return
        }
        
        self.manager = OSBARCManagerFactory.createManager(with: viewController)
    }
    
    @objc func scanBarcode(_ call: CAPPluginCall) {
        if self.manager == nil {
            self.load()
        }
        
        guard let manager = self.manager else {
            call.reject("Capacitor bridge or viewController is not initialized.")
            return
        }
        
        guard let argumentsData = try? JSONSerialization.data(withJSONObject: call.jsObjectRepresentation),
              let scanArguments = try? JSONDecoder().decode(OSBarcodeScanArgumentsModel.self, from: argumentsData) else {
            call.reject("Error decoding scan arguments")
            return
        }
        
        Task {
            do {
                let scannedBarcode = try await manager.scanBarcode(with: scanArguments.scanInstructions, scanArguments.scanButtonText, scanArguments.cameraDirection, and: scanArguments.scanOrientation)
                call.resolve(["ScanResult": scannedBarcode])
            } catch OSBARCManagerError.cameraAccessDenied {
                call.reject("Camera access denied")
            } catch OSBARCManagerError.scanningCancelled {
                call.reject("Scanning cancelled")
            } catch {
                call.reject("An unexpected error occurred: \(error.localizedDescription)")
            }
        }
    }
}
