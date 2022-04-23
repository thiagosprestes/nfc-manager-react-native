import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { AppStackParamsList } from '../../../navigation/types';
import { ComponentStates, WriteOptions, WriteTagSteps } from '../../../types';
import { WriteTag } from './container';

interface WriteTagScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.ReadTag'>;
}

const WriteTagScreen = ({ navigation }: WriteTagScreenProps) => {
  const [componentStates, setComponentStates] = useState(
    ComponentStates.default,
  );
  const [step, setStep] = useState(WriteTagSteps.options);
  const [selectedWriteOption, setSelectedWriteOption] =
    useState<WriteOptions>();

  const handleOnSelectWriteOption = (option: WriteOptions) => {
    setStep(WriteTagSteps.content);
    setSelectedWriteOption(option);
  };

  const handleOnNext = () => {
    setStep(WriteTagSteps.write);
  };

  return (
    <WriteTag
      onNext={handleOnNext}
      onSelectOption={handleOnSelectWriteOption}
      selectedOption={selectedWriteOption}
      step={step}
    />
  );
};

export { WriteTagScreen };
