import Foundation
import OSBarcodeLib

extension OSBARCScanParameters: Decodable {

    enum CodingKeys: CodingKey {
        case scanButton
        case scanInstructions
        case scanText
        case cameraDirection
        case scanOrientation
        case hint
    }

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        let scanInstructions = try container.decode(String.self, forKey: .scanInstructions)

        var scanButtonText: String? // property is set based on `scanButton` and `scanText`.
        let scanButton = try container.decode(Bool.self, forKey: .scanButton)
        if scanButton { // only set `scanButtonText` if `scanButton` is enabled
            scanButtonText = try container.decode(String.self, forKey: .scanText)
        }

        let cameraDirectionInt = try container.decode(Int.self, forKey: .cameraDirection)
        let cameraDirection = OSBARCCameraModel.map(value: cameraDirectionInt)

        let scanOrientationInt = try container.decode(Int.self, forKey: .scanOrientation)
        let scanOrientation = OSBARCOrientationModel.map(value: scanOrientationInt)

        let hintInt = try container.decode(Int.self, forKey: .hint)
        let hint = OSBARCScannerHint(rawValue: hintInt)

        self.init(
            scanInstructions: scanInstructions,
            scanButtonText: scanButtonText,
            cameraDirection: cameraDirection,
            scanOrientation: scanOrientation,
            hint: hint
        )
    }
}
