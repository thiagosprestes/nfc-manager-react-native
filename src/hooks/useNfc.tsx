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

enum NativeEventType {
  hasDiscoveredNfcTag = 'hasDiscoveredNfcTag',
  hasWrittenTag = 'hasWrittenTag',
}

export enum WrittenOptionValue {
  text = 'text',
  url = 'url',
}

const useNfc = () => {
  const [tag, setTag] = useState<string>();
  const [nfcState, setNfcState] = useState(NfcState.default);
  const [writeWithSuccess, setWriteWithSuccess] = useState(false);

  const eventEmitter = new NativeEventEmitter(NfcManagerModule);
  const readTagTimeout = useRef(15000);

  const onReadTimeout = () => {
    setTimeout(() => {
      setNfcState(NfcState.error);
    }, readTagTimeout.current);
  };

  const readNfc = () => {
    const eventListener = eventEmitter.addListener(
      NativeEventType.hasDiscoveredNfcTag,
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

  const writeNfc = (data: string, selectedOption: WrittenOptionValue) => {
    const eventListener = eventEmitter.addListener(
      NativeEventType.hasWrittenTag,
      () => {
        setWriteWithSuccess(true);
      },
    );

    onReadTimeout();
    writeNfcTag(data, selectedOption);

    return () => {
      eventListener.remove();
      clearTimeout(readTagTimeout.current);
    };
  };

  return { nfcState, tag, writeNfc, readNfc, writeWithSuccess };
};

export { useNfc };
