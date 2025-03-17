// swiftlint:disable line_length
import Foundation
import Capacitor
import OSBarcodeLib

@objc(CapacitorBarcodeScannerPlugin)
public class CapacitorBarcodeScannerPlugin: CAPPlugin {
    var manager: OSBARCManagerProtocol?

    override public func load() {
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
            call.sendError(with: OSBarcodeError.bridgeNotInitialized)
            return
        }

        guard let argumentsData = try? JSONSerialization.data(withJSONObject: call.jsObjectRepresentation),
              let scanArguments = try? JSONDecoder().decode(OSBarcodeScanArgumentsModel.self, from: argumentsData) else {
            call.sendError(with: OSBarcodeError.scanInputArgumentsIssue)
            return
        }

        Task {
            do {
                let scannedBarcode = try await manager.scanBarcode(with: scanArguments.scanInstructions, scanArguments.scanButtonText, scanArguments.cameraDirection, and: scanArguments.scanOrientation)
                call.resolve(["ScanResult": scannedBarcode])
            } catch OSBARCManagerError.cameraAccessDenied {
                call.sendError(with: OSBarcodeError.cameraAccessDenied)
            } catch OSBARCManagerError.scanningCancelled {
                call.sendError(with: OSBarcodeError.scanningCancelled)
            } catch {
                call.sendError(with: OSBarcodeError.scanningError)
            }
        }
    }
}

extension CAPPluginCall {
    
    func sendError(with error: OSBarcodeError) {
        self.reject(error.errorDescription, error.errorCode)
    }
    
}
