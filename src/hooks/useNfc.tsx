import { useEffect, useRef, useState } from 'react';
import { NativeEventEmitter } from 'react-native';
import {
  NfcManagerModule,
  registerNfcEvent,
} from '../utils/nativeModules/nfcManager';

export enum NfcState {
  default = 'default',
  error = 'error',
}

const useNfc = () => {
  const [tag, setTag] = useState<string>();
  const [nfcState, setNfcState] = useState(NfcState.default);

  const eventEmitter = new NativeEventEmitter(NfcManagerModule);
  const readTagTimeout = useRef(5000);

  const onSetReadTimeout = () => {
    setTimeout(() => {
      setNfcState(NfcState.error);
    }, readTagTimeout.current);
  };

  useEffect(() => {
    const eventListener = eventEmitter.addListener(
      'hasDiscoveredNfcTag',
      event => {
        setTag(event.tagData);
      },
    );

    onSetReadTimeout();
    registerNfcEvent();

    return () => {
      eventListener.remove();
      clearTimeout(readTagTimeout.current);
    };
  }, []);

  return { nfcState, tag };
};

export { useNfc };
