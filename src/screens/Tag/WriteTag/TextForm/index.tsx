import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { WrittenOptionValue } from '../../../../hooks/useNfc';
import { AppRoutes, AppStackParamsList } from '../../../../navigation/types';
import { TextForm } from './container';

interface TextFormScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.TextForm'>;
}

const TextFormScreen = ({ navigation }: TextFormScreenProps) => {
  const [inputText, setInputText] = useState('');

  const handleOnChangeText = (text: string) => {
    setInputText(text);
  };

  const handleOnNext = () => {
    navigation.navigate(AppRoutes.Write, {
      tagContent: inputText,
      writtenOptionValue: WrittenOptionValue.text,
    });
  };

  return (
    <TextForm
      onChangeText={handleOnChangeText}
      onNext={handleOnNext}
      text={inputText}
    />
  );
};

export { TextFormScreen };
