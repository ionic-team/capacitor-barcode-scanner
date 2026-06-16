require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name = 'CapacitorBarcodeScanner'
  s.version = package['version']
  s.summary = package['description']
  s.license = package['license']
  s.homepage = package['repository']['url']
  s.author = package['author']
  s.source = { :git => package['repository']['url'], :tag => s.version.to_s }
  s.source_files = 'ios/Sources/**/*.{swift,h,m,c,cc,mm,cpp}'
  s.ios.deployment_target  = '15.0'
  s.dependency 'Capacitor'
  # LOCAL TESTING ONLY: bundle the locally-built OSBarcodeLib xcframework
  # (feat/RMET-5194/alternate-text) so the plugin is self-contained for a dev release, instead of
  # depending on the published pod. Restore `s.dependency 'OSBarcodeLib', '2.0.1'` and remove the
  # vendored_frameworks line before publishing a real release.
  s.vendored_frameworks = 'ios/Frameworks/OSBarcodeLib.xcframework'
  s.swift_version = '5.1'
end
