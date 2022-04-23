import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { Container, Text } from './styles';
import readingNfcAnimation from '../../../../assets/animations/readingNfc.json';
import { View } from 'react-native';
import { WriteOptions, WriteTagSteps } from '../../../../types';
import { Options } from '../components/Options';
import { Content } from '../components/Content';

interface WriteTagProps {
  onNext: () => void;
  onSelectOption: (option: WriteOptions) => void;
  selectedOption?: WriteOptions;
  step: WriteTagSteps;
}

const WriteTag = ({
  onNext,
  onSelectOption,
  selectedOption,
  step,
}: WriteTagProps) => {
  const DefaultState = (
    <>
      <View style={{ height: 200, transform: [{ rotate: '90deg' }] }}>
        <AnimatedLottieView
          source={readingNfcAnimation}
          autoPlay
          loop
          resizeMode="contain"
        />
      </View>
      <Text>Aproxime uma tag ao leitor de NFC do seu smartphone</Text>
    </>
  );

  const WriteOptions = <Options onSelectOption={onSelectOption} />;

  const InsertContent = (
    <Content onNext={onNext} selectedOption={selectedOption} />
  );

  return (
    <Container>
      {
        {
          [WriteTagSteps.options]: WriteOptions,
          [WriteTagSteps.content]: InsertContent,
          [WriteTagSteps.write]: DefaultState,
        }[step]
      }
    </Container>
  );
};

export { WriteTag };
