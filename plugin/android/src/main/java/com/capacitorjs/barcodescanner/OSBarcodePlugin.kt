package com.capacitorjs.barcodescanner

import android.content.Intent
import androidx.activity.result.ActivityResult
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.ActivityCallback
import com.getcapacitor.annotation.CapacitorPlugin
import com.outsystems.plugins.barcode.controller.OSBARCController
import com.outsystems.plugins.barcode.model.OSBARCScanParameters
import com.outsystems.plugins.barcode.view.OSBARCScannerActivity

@CapacitorPlugin(name = "CapacitorBarcodeScanner")
class CapacitorBarcodeScannerPlugin : Plugin() {
    companion object {
        private const val ERROR_FORMAT_PREFIX = "OS-PLUG-BARC-"
        private const val SCAN_REQUEST_CODE = 112
    }

    private lateinit var barcodeController: OSBARCController

    override fun load() {
        super.load()
        barcodeController = OSBARCController()
    }

    @PluginMethod
    fun scanBarcode(call: PluginCall) {
        val hint = call.getInt("hint")
        val scanInstructions = call.getString("scanInstructions")
        val scanButton = call.getBoolean("scanButton", false) ?: false
        val scanText = call.getString("scanText", "") ?: ""
        val cameraDirection = call.getInt("cameraDirection")
        val scanOrientation = call.getInt("scanOrientation")
        val androidScanningLibrary = call.getObject("android")?.getString("androidScanningLibrary")

        val parameters = OSBARCScanParameters(
                scanInstructions = scanInstructions,
                cameraDirection = cameraDirection,
                scanOrientation = scanOrientation,
                scanButton = scanButton,
                scanText = scanText,
                hint = hint,
                androidScanningLibrary = androidScanningLibrary
        )

        val scanIntent = Intent(activity, OSBARCScannerActivity::class.java)
                .putExtra("SCAN_PARAMETERS", parameters)

        startActivityForResult(call, scanIntent, "handleScanResult")
    }

    @ActivityCallback
    fun handleScanResult(call: PluginCall, result: ActivityResult) {
        barcodeController.handleActivityResult(
                SCAN_REQUEST_CODE, result.resultCode, result.data,
                onSuccess = { scanResult ->
                    val ret = JSObject()
                    ret.put("ScanResult", scanResult)
                    call.resolve(ret)
                },
                onError = { error ->
                    call.reject(error.description, formatErrorCode(error.code))
                }
        )
    }

    private fun formatErrorCode(code: Int): String {
        return ERROR_FORMAT_PREFIX + code.toString().padStart(4, '0')
    }
}
