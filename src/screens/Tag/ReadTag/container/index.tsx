import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { Container, Text } from './styles';
import readingNfcAnimation from '../../../../assets/animations/readingNfc.json';
import { View } from 'react-native';
import { ComponentStates, ErrorType } from '../../../../types';
import { Error } from '../../../../components/Error';

interface ReadTagProps {
  componentStates: ComponentStates;
  errorType: ErrorType;
  onRetryRead: () => void;
}

const ReadTag = ({ componentStates, errorType, onRetryRead }: ReadTagProps) => {
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

  return (
    <Container>
      {
        {
          [ComponentStates.default]: DefaultState,
          [ComponentStates.loading]: <></>,
          [ComponentStates.error]: (
            <Error type={errorType} onRetry={onRetryRead} />
          ),
        }[componentStates]
      }
    </Container>
  );
};

export { ReadTag };
