import React, { useEffect } from 'react';
import { AppStackParamsList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  isNfcEnabled,
  onGoToEnableNfc,
} from '../../utils/nativeModules/nfcManager';
import { EnableNfc } from './container';
import { AppState } from 'react-native';
import { RouteProp } from '@react-navigation/native';

interface EnableNfcProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.EnableNfc'>;
  route: RouteProp<AppStackParamsList, 'App.EnableNfc'>;
}

const EnableNfcScreen = ({ navigation, route }: EnableNfcProps) => {
  const { nextScreen } = route.params;

  const handleOnGoToEnableNfc = async () => {
    onGoToEnableNfc();
  };

  const checkIfNfcIsEnabled = async () => {
    if (await isNfcEnabled()) navigation.replace(nextScreen);
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
