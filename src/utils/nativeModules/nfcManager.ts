import { NativeModules } from 'react-native';

export const { NfcManagerModule } = NativeModules;

export const deviceHasNfc = async () => {
  return await NfcManagerModule.deviceHasNfc();
};

export const registerNfcEvent = () => {
  return NfcManagerModule.registerNfcEvent();
};

export const writeNfcTag = (data: string, type: string) => {
  return NfcManagerModule.writeNfcTag(data, type);
};

export const unregisterNfcEvent = () => {
  return NfcManagerModule.unregisterNfcEvent();
};

export const isNfcEnabled = async () => {
  return await NfcManagerModule.isNfcEnabled();
};

export const onGoToEnableNfc = () => {
  return NfcManagerModule.onGoToEnableNfc();
};

export const onEnableLocation = async () => {
  return await NfcManagerModule.onEnableLocation();
};
