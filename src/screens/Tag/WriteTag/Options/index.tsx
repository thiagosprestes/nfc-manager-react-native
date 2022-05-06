import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { AppRoutes, AppStackParamsList } from '../../../../navigation/types';
import { WriteOptions } from '../../../../types';
import { Options } from './container';

interface OptionsScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.Options'>;
}

const OptionsScreen = ({ navigation }: OptionsScreenProps) => {
  const handleOnSelectOption = (option: WriteOptions) => {
    const nextRoute = {
      [WriteOptions.text]: AppRoutes.Text,
      [WriteOptions.url]: AppRoutes.Url,
      [WriteOptions.location]: AppRoutes.Location,
      [WriteOptions.phoneNumber]: AppRoutes.Text,
    };

    navigation.navigate(nextRoute[option]);
  };

  return <Options onSelectOption={handleOnSelectOption} />;
};

export { OptionsScreen };
