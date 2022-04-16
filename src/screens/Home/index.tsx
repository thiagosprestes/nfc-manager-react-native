import React, { useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Home } from './container';
import { AppRoutes, AppStackParamsList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../styles';
import { isNfcEnabled } from '../../utils/nativeModules/nfcManager';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.ReadTag'>;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const featuresList = [
    {
      name: 'Ler',
      icon: (
        <MaterialCommunityIcons
          color={colors.secondaryColor}
          name="text-box-search-outline"
          size={50}
        />
      ),
    },
    {
      name: 'Escrever',
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
      navigation.navigate(AppRoutes.EnableNfc);
      return;
    }
    navigation.navigate(AppRoutes.ReadTag);
  };

  useEffect(() => {
    navigation.navigate(AppRoutes.DeviceNotHaveNfc);
  }, []);

  return (
    <Home featuresList={featuresList} onGoToReadTag={handleOnGoToReadTag} />
  );
};

export { HomeScreen };
