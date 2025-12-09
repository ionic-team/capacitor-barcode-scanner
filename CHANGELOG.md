# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.2.2](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v2.2.0...v2.2.2) (2025-12-09)

### Bug Fixes

* Same as 2.2.0, reverts previous unwanted changes on version 2.2.1 (which is deprecated and shouldn't be used).

# [2.2.0](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v2.1.0...v2.2.0) (2025-10-06)


### Bug Fixes

* **android:** Fix intermittent crash due to `lateinit var` ([#92](https://github.com/ionic-team/capacitor-barcode-scanner/issues/92)) ([839328f](https://github.com/ionic-team/capacitor-barcode-scanner/commit/839328fd5234bef6ff1b6077ec7cfece3af01de9))


### Features

* **ios:** add support for spm ([#91](https://github.com/ionic-team/capacitor-barcode-scanner/issues/91)) ([f8b8645](https://github.com/ionic-team/capacitor-barcode-scanner/commit/f8b864556a1485e14b0d84aa5e9e02695ae2356c))





# [2.1.0](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v2.0.4...v2.1.0) (2025-09-09)


### Bug Fixes

* **web:** enable back camera support in browser environment ([#85](https://github.com/ionic-team/capacitor-barcode-scanner/issues/85)) ([f0f81c4](https://github.com/ionic-team/capacitor-barcode-scanner/commit/f0f81c487d21316ff48d5bdf4acb4c0544c3c172))
* **web:** ignore "No MultiFormat Readers" error ([#64](https://github.com/ionic-team/capacitor-barcode-scanner/issues/64)) ([29f0def](https://github.com/ionic-team/capacitor-barcode-scanner/commit/29f0defcc4cf88c2af21811c940a192023a3f3a7))


### Features

* Use hint and return barcode format ([#86](https://github.com/ionic-team/capacitor-barcode-scanner/issues/86)) ([e3de532](https://github.com/ionic-team/capacitor-barcode-scanner/commit/e3de532351db36674c4f0f372b705d299f63b785))





## [2.0.4](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v2.0.3...v2.0.4) (2025-08-20)

### Performance improvements

* (android) Reduce memory consumption for ML Kit ([#82](https://github.com/ionic-team/capacitor-barcode-scanner/pull/82))




## [2.0.3](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v2.0.1...v2.0.3) (2025-03-17)

### Bug Fixes

* (android) Properly handle parameters ([#68](https://github.com/ionic-team/capacitor-barcode-scanner/pull/68))

* (ios) Properly handle error cases ([#67](https://github.com/ionic-team/capacitor-barcode-scanner/pull/67))

## [2.0.1](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v2.0.0...v2.0.1) (2025-02-25)

### Bug Fixes

* (web) Don't close scanner when no barcode is detected ([#27](https://github.com/ionic-team/capacitor-barcode-scanner/pull/27))

### Dependencies

* (android) Update dependency location for `ionbarcode` ([#57](https://github.com/ionic-team/capacitor-barcode-scanner/pull/57))

# [2.0.0](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v1.0.4...v2.0.0) (2024-03-15)

### ⚠ BREAKING CHANGES

* Updated to support Capacitor 7
* Minimum Android SDK version increased to align with Capacitor 7 requirements
* Minimum iOS deployment target increased to align with Capacitor 7 requirements

### Features

* Add support for Capacitor 7

## [1.0.4](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v1.0.3...v1.0.4) (2024-12-10)


### Bug Fixes

* android crash addressed with dep updates ([89404c1](https://github.com/ionic-team/capacitor-barcode-scanner/commit/89404c1130f6491dd4d5a5bf136c595a18dc6451))


### Reverts

* Revert "chore(android): bump kotlin, gradle and aar versions (#45)" ([a20c7cf](https://github.com/ionic-team/capacitor-barcode-scanner/commit/a20c7cfa2fa2cc727ceff9b0293ce6cdbd7d9de0)), closes [#45](https://github.com/ionic-team/capacitor-barcode-scanner/issues/45)





## [1.0.3](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v1.0.1...v1.0.3) (2024-12-02)


### Bug Fixes

* **example-app:** Set minSdkVersion version to 26 ([#9](https://github.com/ionic-team/capacitor-barcode-scanner/issues/9)) ([ddfb3e4](https://github.com/ionic-team/capacitor-barcode-scanner/commit/ddfb3e493713d49ac0dc7142da357d9c5f790958))
* npm publish fix up ([dd32fbe](https://github.com/ionic-team/capacitor-barcode-scanner/commit/dd32fbe69a5b7b6781e6b6301a58dec57f6f475a))





## [1.0.1](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v1.0.0...v1.0.1) (2024-05-16)


### Bug Fixes

* use defaults where needed ([59d9fc5](https://github.com/ionic-team/capacitor-barcode-scanner/commit/59d9fc5b1eb8fe65a3a1fd6d8cf361666d27154f))





# [1.0.0](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v1.0.0-alpha.2...v1.0.0) (2024-04-16)

**Note:** Version bump only for package root





# [1.0.0-alpha.2](https://github.com/ionic-team/capacitor-barcode-scanner/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2024-04-16)

**Note:** Version bump only for package root





# 1.0.0-alpha.1 (2024-04-16)


### Bug Fixes

* align native interfaces with web ([2895ff8](https://github.com/ionic-team/capacitor-barcode-scanner/commit/2895ff894d0a4a976afc32b4d34749cdae49054a))


### Features

* **web:** Implement scanning on the web ([f1d1105](https://github.com/ionic-team/capacitor-barcode-scanner/commit/f1d11053996969790e7f468c024606cb61479b63))
