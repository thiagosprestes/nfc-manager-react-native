import { NativeModules } from 'react-native';

export const { NfcManagerModule } = NativeModules;

export const registerNfcEvent = () => {
  return NfcManagerModule.registerNfcEvent();
};
