import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Home } from './container';
import { AppRoutes, AppStackParamsList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../styles';
import {
  deviceHasNfc,
  isNfcEnabled,
} from '../../utils/nativeModules/nfcManager';
import { ComponentStates } from '../../types';
import { FeatureOptions } from './types';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.Home'>;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [componentState, setComponentState] = useState(ComponentStates.default);

  const featuresList = [
    {
      name: FeatureOptions.read,
      icon: (
        <MaterialCommunityIcons
          color={colors.secondaryColor}
          name="text-box-search-outline"
          size={50}
        />
      ),
    },
    {
      name: FeatureOptions.write,
      icon: (
        <FontAwesome
          color={colors.secondaryColor}
          name="pencil-square-o"
          size={50}
        />
      ),
    },
  ];

  const handleOnGoToReadTag = async () => {
    if (!(await isNfcEnabled())) {
      navigation.navigate(AppRoutes.EnableNfc, {
        nextScreen: AppRoutes.ReadTag,
      });
      return;
    }

    navigation.navigate(AppRoutes.ReadTag);
  };

  const handleOnToWriteTag = async () => {
    if (!(await isNfcEnabled())) {
      navigation.navigate(AppRoutes.EnableNfc, {
        nextScreen: AppRoutes.Options,
      });
      return;
    }

    navigation.navigate(AppRoutes.Options);
  };

  const hasNfcAdapter = async () => {
    const haveNfcAdapter = await deviceHasNfc();

    setComponentState(
      haveNfcAdapter ? ComponentStates.default : ComponentStates.error,
    );
  };

  useEffect(() => {
    hasNfcAdapter();
  }, []);

  return (
    <Home
      componentState={componentState}
      featuresList={featuresList}
      onGoToReadTag={handleOnGoToReadTag}
      onGoToWriteTag={handleOnToWriteTag}
    />
  );
};

export { HomeScreen };
