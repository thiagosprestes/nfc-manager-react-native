import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import { NativeEventEmitter } from 'react-native';
import { AppRoutes, AppStackParamsList } from '../../../navigation/types';
import { ComponentStates, ErrorType } from '../../../types';
import {
  NfcManagerModule,
  registerNfcEvent,
  unregisterNfcEvent,
} from '../../../utils/nativeModules/nfcManager';
import { ReadTag } from './container';

interface ReadTagScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.ReadTag'>;
}

const ReadTagScreen = ({ navigation }: ReadTagScreenProps) => {
  const [componentStates, setComponentStates] = useState(
    ComponentStates.default,
  );
  const [errorType, setErrorType] = useState(ErrorType.error);

  const readTagTimeout = useRef(15000);

  const eventEmitter = new NativeEventEmitter(NfcManagerModule);

  const onFoundTag = () => {
    navigation.replace(AppRoutes.TagInfo);
  };

  const handleOnRetryRead = () => {
    setComponentStates(ComponentStates.default);
  };

  const onSetReadTimeout = () => {
    setTimeout(() => {
      setErrorType(ErrorType.notFound);
      setComponentStates(ComponentStates.error);
    }, readTagTimeout.current);
  };

  useEffect(() => {
    const eventListener = eventEmitter.addListener(
      'hasDiscoveredNfcTag',
      event => {
        onFoundTag();
      },
    );

    onSetReadTimeout();
    registerNfcEvent();

    return () => {
      eventListener.remove();
      clearTimeout(readTagTimeout.current);
    };
  }, []);

  return (
    <ReadTag
      componentStates={componentStates}
      errorType={errorType}
      onRetryRead={handleOnRetryRead}
    />
  );
};

export { ReadTagScreen };
