// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorBarcodeScanner",
    platforms: [.iOS(.v16)],
    products: [
        .library(
            name: "CapacitorBarcodeScanner",
            targets: ["CapacitorBarcodeScannerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "9.0.0-alpha.5"),
        .package(url: "https://github.com/OutSystems/OSBarcodeLib-iOS.git", from: "2.2.0")
    ],
    targets: [
        .target(
            name: "CapacitorBarcodeScannerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "OSBarcodeLib", package: "OSBarcodeLib-iOS")
            ],
            path: "ios/Sources/CapacitorBarcodeScannerPlugin"),
        .testTarget(
            name: "CapacitorBarcodeScannerPluginTests",
            dependencies: ["CapacitorBarcodeScannerPlugin"],
            path: "ios/Tests/CapacitorBarcodeScannerPluginTests")
    ]
)
