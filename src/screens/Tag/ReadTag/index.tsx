import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { NfcState, useNfc } from '../../../hooks/useNfc';
import { AppRoutes, AppStackParamsList } from '../../../navigation/types';
import { ComponentStates, ErrorType } from '../../../types';
import {
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

  const { nfcState, readNfc, tag } = useNfc();

  const onFoundTag = (tagData: string) => {
    navigation.replace(AppRoutes.TagInfo, {
      tagData,
    });
  };

  const handleOnRetryRead = () => {
    registerNfcEvent();
    setComponentStates(ComponentStates.default);
  };

  useEffect(() => {
    if (nfcState === NfcState.error) {
      unregisterNfcEvent();
      setErrorType(ErrorType.notFound);
      setComponentStates(ComponentStates.error);
    }
  }, [nfcState]);

  useEffect(() => {
    if (tag) {
      onFoundTag(tag!);
    }
  }, [tag]);

  useEffect(() => {
    readNfc();
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
