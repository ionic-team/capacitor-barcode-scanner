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
  # LOCAL TESTING ONLY: version pin removed so the local OSBarcodeLib pod (overridden via the
  # example app's Podfile :path) satisfies the dependency. Restore '2.0.1' before publishing.
  s.dependency 'OSBarcodeLib'
  s.swift_version = '5.1'
end
