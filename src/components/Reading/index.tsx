import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import readingNfcAnimation from '../../assets/animations/readingNfc.json';
import { Container, Text } from './styles';

const Reading = () => (
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

export default Reading;
