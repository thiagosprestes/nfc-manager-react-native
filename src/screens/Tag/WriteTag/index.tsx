import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { AppRoutes, AppStackParamsList } from '../../../navigation/types';
import { WriteOptions, WriteTagSteps } from '../../../types';
import { isNfcEnabled } from '../../../utils/nativeModules/nfcManager';
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

  const handleOnNext = async () => {
    const switchSteps = {
      [WriteTagSteps.options]: WriteTagSteps.content,
      [WriteTagSteps.content]: WriteTagSteps.write,
      [WriteTagSteps.write]: WriteTagSteps.success,
      [WriteTagSteps.success]: WriteTagSteps.success,
    };

    if (step === WriteTagSteps.content && !(await isNfcEnabled())) {
      navigation.navigate(AppRoutes.EnableNfc, {
        nextScreen: AppRoutes.WriteTag,
      });
    }

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
