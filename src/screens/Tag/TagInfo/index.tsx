import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Share from 'react-native-share';
import { AppRoutes, AppStackParamsList } from '../../../navigation/types';
import { TagInfo } from './container';

interface TagInfoScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.TagInfo'>;
  route: RouteProp<AppStackParamsList, 'App.TagInfo'>;
}

const TagInfoScreen = ({ navigation, route }: TagInfoScreenProps) => {
  const { tagData } = route.params;

  const handleOnReadAgain = () => {
    navigation.replace(AppRoutes.ReadTag);
  };

  const handleOnShare = () => {
    Share.open({ message: tagData });
  };

  return (
    <TagInfo
      onShare={handleOnShare}
      onReadAgain={handleOnReadAgain}
      tagData={tagData}
    />
  );
};

export { TagInfoScreen };
