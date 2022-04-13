import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { Container, Text } from './styles';
import readingNfcAnimation from '../assets/readingNfc.json';
import { View } from 'react-native';

const ReadTag = () => (
  <Container>
    <View style={{ height: 200, transform: [{ rotate: '90deg' }] }}>
      <AnimatedLottieView
        source={readingNfcAnimation}
        autoPlay
        loop
        resizeMode="contain"
      />
    </View>
    <Text>Aproxime uma tag ao leitor de NFC do seu smartphone</Text>
  </Container>
);

export { ReadTag };
