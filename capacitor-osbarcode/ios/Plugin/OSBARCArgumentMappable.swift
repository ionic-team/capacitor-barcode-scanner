import OSBarcodeLib

protocol OSBARCArgumentMappable {
    static func map(value: Int) -> Self
}

extension OSBARCCameraModel: OSBARCArgumentMappable {
    static func map(value: Int) -> OSBARCCameraModel { value == 1 ? .back : .front }
}

extension OSBARCOrientationModel: OSBARCArgumentMappable {
    static func map(value: Int) -> OSBARCOrientationModel {
        switch value {
        case 1: return .portrait
        case 2: return .landscape
        default: return .adaptive
        }
    }
}
