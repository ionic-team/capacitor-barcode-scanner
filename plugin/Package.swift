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
        .package(url: "https://github.com/ionic-team/capacitor", exact: "9.0.0-alpha.7"),
        .package(url: "https://github.com/OutSystems/OSBarcodeLib-iOS.git", from: "3.0.0")
    ],
    targets: [
        .target(
            name: "CapacitorBarcodeScannerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor"),
                .product(name: "OSBarcodeLib", package: "OSBarcodeLib-iOS")
            ],
            path: "ios/Sources/CapacitorBarcodeScannerPlugin"),
        .testTarget(
            name: "CapacitorBarcodeScannerPluginTests",
            dependencies: ["CapacitorBarcodeScannerPlugin"],
            path: "ios/Tests/CapacitorBarcodeScannerPluginTests")
    ]
)
