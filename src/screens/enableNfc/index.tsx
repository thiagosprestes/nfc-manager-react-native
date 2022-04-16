import React, { useEffect } from 'react';
import { AppRoutes, AppStackParamsList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  isNfcEnabled,
  onGoToEnableNfc,
} from '../../utils/nativeModules/nfcManager';
import { EnableNfc } from './container';
import { AppState } from 'react-native';

interface EnableNfcProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.ReadTag'>;
}

const EnableNfcScreen = ({ navigation }: EnableNfcProps) => {
  const handleOnGoToEnableNfc = async () => {
    onGoToEnableNfc();
  };

  const checkIfNfcIsEnabled = async () => {
    if (await isNfcEnabled()) navigation.replace(AppRoutes.ReadTag);
  };

  useEffect(() => {
    const appState = AppState.addEventListener('focus', checkIfNfcIsEnabled);

    return () => {
      appState.remove();
    };
  }, []);

  return <EnableNfc onGoToEnableNfc={handleOnGoToEnableNfc} />;
};

export { EnableNfcScreen };
