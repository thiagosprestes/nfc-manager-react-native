import { useRef, useState } from 'react';
import { NativeEventEmitter } from 'react-native';
import {
  NfcManagerModule,
  registerNfcEvent,
  writeNfcTag,
} from '../utils/nativeModules/nfcManager';

export enum NfcState {
  default = 'default',
  error = 'error',
}

const useNfc = () => {
  const [tag, setTag] = useState<string>();
  const [nfcState, setNfcState] = useState(NfcState.default);
  const [writeWithSuccess, setWriteWithSuccess] = useState(false);

  const eventEmitter = new NativeEventEmitter(NfcManagerModule);
  const readTagTimeout = useRef(5000);

  const onReadTimeout = () => {
    setTimeout(() => {
      setNfcState(NfcState.error);
    }, readTagTimeout.current);
  };

  const readNfc = () => {
    const eventListener = eventEmitter.addListener(
      'hasDiscoveredNfcTag',
      event => {
        setTag(event.tagData);
      },
    );

    onReadTimeout();
    registerNfcEvent();

    return () => {
      eventListener.remove();
      clearTimeout(readTagTimeout.current);
    };
  };

  const writeNfc = (data: string) => {
    const eventListener = eventEmitter.addListener('hasWrittenTag', () => {
      setWriteWithSuccess(true);
    });

    onReadTimeout();
    writeNfcTag(data);

    return () => {
      eventListener.remove();
      clearTimeout(readTagTimeout.current);
    };
  };

  return { nfcState, tag, writeNfc, readNfc, writeWithSuccess };
};

export { useNfc };
