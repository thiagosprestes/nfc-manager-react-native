import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppRoutes, AppStackParamsList } from '../../../../navigation/types';
import { Success } from './container';

interface SuccessScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.Success'>;
  route: RouteProp<AppStackParamsList, 'App.Success'>;
}

const SuccessScreen = ({ navigation, route }: SuccessScreenProps) => {
  const { tag } = route.params;

  const handleOnNext = () => {
    navigation.replace(AppRoutes.Home);
  };

  return <Success onNext={handleOnNext} writtenData={tag} />;
};

export { SuccessScreen };
