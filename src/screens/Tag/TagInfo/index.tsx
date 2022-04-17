import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { AppRoutes, AppStackParamsList } from '../../../navigation/types';
import { TagInfo } from './container';

interface TagInfoScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.TagInfo'>;
  route: RouteProp<AppStackParamsList, 'App.TagInfo'>;
}

const TagInfoScreen = ({ navigation, route }: TagInfoScreenProps) => {
  const handleOnReadAgain = () => {
    navigation.replace(AppRoutes.ReadTag);
  };

  return (
    <TagInfo onReadAgain={handleOnReadAgain} tagData={route.params.tagData} />
  );
};

export { TagInfoScreen };
