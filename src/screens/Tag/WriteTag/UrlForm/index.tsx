import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { WrittenOptionValue } from '../../../../hooks/useNfc';
import { AppRoutes, AppStackParamsList } from '../../../../navigation/types';
import { UrlForm } from './container';

interface UrlFormScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.UrlForm'>;
}

const UrlFormScreen = ({ navigation }: UrlFormScreenProps) => {
  const [inputText, setInputText] = useState('');

  const handleOnChangeText = (text: string) => {
    setInputText(text);
  };

  const handleOnNext = () => {
    navigation.navigate(AppRoutes.Write, {
      tagContent: inputText,
      writtenOptionValue: WrittenOptionValue.url,
    });
  };

  return (
    <UrlForm
      onChangeText={handleOnChangeText}
      onNext={handleOnNext}
      text={inputText}
    />
  );
};

export { UrlFormScreen };
