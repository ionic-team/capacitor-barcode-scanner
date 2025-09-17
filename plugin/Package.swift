// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorBarcodeScanner",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorBarcodeScanner",
            targets: ["CapacitorBarcodeScannerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0"),
        .package(url: "https://github.com/OutSystems/OSBarcodeLib-iOS.git", exact: "2.1.0")
    ],
    targets: [
        .target(
            name: "CapacitorBarcodeScannerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                .product(name: "OSBarcodeLib", package: "OSBarcodeLib-iOS")
            ],
            path: "ios/Sources/CapacitorBarcodeScannerPlugin"),
        .testTarget(
            name: "CapacitorBarcodeScannerPluginTests",
            dependencies: ["CapacitorBarcodeScannerPlugin"],
            path: "ios/Tests/CapacitorBarcodeScannerPluginTests")
    ]
)
