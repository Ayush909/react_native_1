package com.newapp; // replace your-apps-package-name with your app’s package name

import android.os.Bundle
import android.util.Log
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import net.sourceforge.tess4j.Tesseract
import net.sourceforge.tess4j.TesseractException
import java.io.File

class RNTesseractOcrModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "RNTesseractOcrModule"

    @ReactMethod
    fun recognize(imagePath: String, callback: Callback) {
        try {
            val tesseract = Tesseract()
            val recognizedText = tesseract.doOCR(File(imagePath))
            callback.invoke(recognizedText)
        } catch (e: TesseractException) {
            Log.e("Tesseract", "Error recognizing text", e)
            callback.invoke(null, e.message)
        }
    }


}