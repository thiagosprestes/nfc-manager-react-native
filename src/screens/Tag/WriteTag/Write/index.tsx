import React, { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NfcState, useNfc } from '../../../../hooks/useNfc';
import { AppRoutes, AppStackParamsList } from '../../../../navigation/types';
import { unregisterNfcEvent } from '../../../../utils/nativeModules/nfcManager';
import { WriteTag } from './container';

interface WriteTagScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.Write'>;
  route: RouteProp<AppStackParamsList, 'App.Write'>;
}

const WriteTagScreen = ({ navigation, route }: WriteTagScreenProps) => {
  const { tagContent, writtenOptionValue } = route.params;

  const { nfcState, writeNfc, writeWithSuccess } = useNfc();

  const [writeState, setWriteState] = useState(nfcState);

  const handleOnWrite = () => {
    writeNfc(tagContent, writtenOptionValue);
    setWriteState(NfcState.default);
  };

  useEffect(() => {
    if (nfcState === NfcState.error) {
      unregisterNfcEvent();
      setWriteState(NfcState.error);
    }
  }, [nfcState]);

  useEffect(() => {
    handleOnWrite();
  }, []);

  useEffect(() => {
    if (writeWithSuccess) {
      navigation.replace(AppRoutes.Success, {
        tag: tagContent,
      });
    }
  }, [writeWithSuccess]);

  return <WriteTag onWrite={handleOnWrite} writeState={writeState} />;
};

export { WriteTagScreen };
