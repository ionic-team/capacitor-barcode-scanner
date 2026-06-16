// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorBarcodeScanner",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapacitorBarcodeScanner",
            targets: ["CapacitorBarcodeScannerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
        // LOCAL TESTING ONLY: the remote OSBarcodeLib-iOS package dependency is replaced by the
        // bundled `OSBarcodeLib` binary target below so the plugin is self-contained for a dev
        // release. Restore before publishing a real release:
        // .package(url: "https://github.com/OutSystems/OSBarcodeLib-iOS.git", from: "2.1.1")
    ],
    targets: [
        // LOCAL TESTING ONLY: bundled OSBarcodeLib (feat/RMET-5194/alternate-text). Remove this
        // and restore the remote package product dependency before publishing a real release.
        .binaryTarget(
            name: "OSBarcodeLib",
            path: "ios/Frameworks/OSBarcodeLib.xcframework"),
        .target(
            name: "CapacitorBarcodeScannerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                "OSBarcodeLib"
            ],
            path: "ios/Sources/CapacitorBarcodeScannerPlugin"),
        .testTarget(
            name: "CapacitorBarcodeScannerPluginTests",
            dependencies: ["CapacitorBarcodeScannerPlugin"],
            path: "ios/Tests/CapacitorBarcodeScannerPluginTests")
    ]
)
