import React, { useEffect, useState } from 'react';
import { NativeEventEmitter } from 'react-native';
import { ComponentStates, ErrorType } from '../../types';
import {
  NfcManagerModule,
  registerNfcEvent,
} from '../../utils/nativeModules/nfcManager';
import { ReadTag } from './container';

const ReadTagScreen = () => {
  const [componentStates, setComponentStates] = useState(
    ComponentStates.default,
  );
  const [errorType, setErrorType] = useState(ErrorType.error);

  const eventEmitter = new NativeEventEmitter(NfcManagerModule);

  useEffect(() => {
    const eventListener = eventEmitter.addListener(
      'hasDiscoveredNfcTag',
      event => {
        console.log(event); // "someValue"
      },
    );

    return () => {
      eventListener.remove(); //Removes the listener
    };
  }, []);

  useEffect(() => {
    registerNfcEvent();
  }, []);

  return <ReadTag componentStates={componentStates} errorType={errorType} />;
};

export { ReadTagScreen };
