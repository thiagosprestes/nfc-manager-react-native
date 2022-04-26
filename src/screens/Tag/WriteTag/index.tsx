import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { AppRoutes, AppStackParamsList } from '../../../navigation/types';
import { WriteOptions, WriteTagSteps } from '../../../types';
import { WriteTag } from './container';

interface WriteTagScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.ReadTag'>;
}

const WriteTagScreen = ({ navigation }: WriteTagScreenProps) => {
  const [step, setStep] = useState(WriteTagSteps.options);
  const [selectedWriteOption, setSelectedWriteOption] =
    useState<WriteOptions>();

  const [text, setText] = useState('');

  const handleOnSelectWriteOption = (option: WriteOptions) => {
    setStep(WriteTagSteps.content);
    setSelectedWriteOption(option);
  };

  const handleOnNext = () => {
    const switchSteps = {
      [WriteTagSteps.options]: WriteTagSteps.content,
      [WriteTagSteps.content]: WriteTagSteps.write,
      [WriteTagSteps.write]: WriteTagSteps.success,
      [WriteTagSteps.success]: WriteTagSteps.success,
    };

    setStep(switchSteps[step]);
  };

  const handleOnFinish = () => {
    navigation.navigate(AppRoutes.Home);
  };

  const handleOnChangeText = (data: string) => {
    setText(data);
  };

  return (
    <WriteTag
      onFinish={handleOnFinish}
      onNext={handleOnNext}
      onSelectOption={handleOnSelectWriteOption}
      selectedOption={selectedWriteOption}
      step={step}
      text={text}
      onChangeText={handleOnChangeText}
    />
  );
};

export { WriteTagScreen };
