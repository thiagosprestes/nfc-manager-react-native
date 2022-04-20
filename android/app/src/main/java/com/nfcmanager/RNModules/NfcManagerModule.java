package com.nfcmanager.RNModules;

import android.app.Activity;

import android.content.Context;

import android.content.Intent;

import android.nfc.NdefMessage;

import android.nfc.NfcAdapter;

import android.nfc.Tag;
import android.nfc.tech.Ndef;

import android.os.Bundle;

import androidx.annotation.NonNull;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ActivityEventListener;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;

import com.facebook.react.bridge.ReactApplicationContext;

import com.facebook.react.bridge.ReactContext;

import com.facebook.react.bridge.ReactContextBaseJavaModule;

import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import com.facebook.react.bridge.Promise;

import android.provider.Settings;

import java.util.Arrays;

public class NfcManagerModule extends ReactContextBaseJavaModule implements ActivityEventListener, LifecycleEventListener {
    private final Context context;

    private final ReactApplicationContext reactContext;

    public NfcManagerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
        this.reactContext = reactContext;

        reactContext.addActivityEventListener(this);
        reactContext.addLifecycleEventListener(this);
    }

    @NonNull
    @Override
    public String getName() {
        return "NfcManagerModule";
    }

    private void sendEvent(ReactContext reactContext, @Nullable WritableMap tagData) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("hasDiscoveredNfcTag", tagData);
    }

    @ReactMethod
    private void registerNfcEvent() {
        NfcAdapter nfcAdapter = NfcAdapter.getDefaultAdapter(context);

        Activity currentActivity = getCurrentActivity();

        NfcAdapter.ReaderCallback callback;

        int NfcFlags = NfcAdapter.FLAG_READER_NFC_A | NfcAdapter.FLAG_READER_NFC_B;

        Bundle options = new Bundle();

        options.putInt(NfcAdapter.EXTRA_READER_PRESENCE_CHECK_DELAY, 1000);

        callback = tag -> {
            Ndef mNdef = Ndef.get(tag);
            NdefMessage mNdefMessage = mNdef.getCachedNdefMessage();
            byte[] tagPayload = mNdefMessage.getRecords()[0].getPayload();
            byte[] tagTextArray = Arrays.copyOfRange(tagPayload, (int) tagPayload[0] + 1, tagPayload.length);

            WritableMap nfcDataPayload = Arguments.createMap();
            nfcDataPayload.putString("tagData", new String(tagTextArray));

            sendEvent(reactContext, nfcDataPayload);
        };

        nfcAdapter.enableReaderMode(currentActivity, callback, NfcFlags, options);
    }

    @ReactMethod
    private void unregisterNfcEvent() {
        NfcAdapter nfcAdapter = NfcAdapter.getDefaultAdapter(context);

        Activity currentActivity = getCurrentActivity();

        nfcAdapter.disableReaderMode(currentActivity);
    }

    @ReactMethod
    private void deviceHasNfc(Promise promise) {
        NfcAdapter nfcAdapter = NfcAdapter.getDefaultAdapter(context);

        promise.resolve(nfcAdapter != null);
    }

    @ReactMethod
    private void isNfcEnabled(Promise promise) {
        NfcAdapter nfcAdapter = NfcAdapter.getDefaultAdapter(context);

        promise.resolve(nfcAdapter.isEnabled());
    }

    @ReactMethod
    private void onGoToEnableNfc() {
        Activity currentActivity = getCurrentActivity();

        Intent intent = new Intent(Settings.ACTION_NFC_SETTINGS);

        currentActivity.startActivity(intent);
    }

    @Override
    public void onHostResume() {
    }

    @Override

    public void onHostPause() {
        unregisterNfcEvent();
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
    }

    @Override
    public void onNewIntent(Intent intent) {
    }

    @Override
    public void onHostDestroy() {
    }

    @ReactMethod
    public void addListener(String eventName) {
    }

    @ReactMethod
    public void removeListeners(Integer count) {
    }
}