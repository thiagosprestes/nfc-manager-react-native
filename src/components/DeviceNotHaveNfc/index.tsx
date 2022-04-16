import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles';
import { Container, Description, Title } from './styles';

const DeviceNotHaveNfc = () => (
  <Container>
    <MaterialCommunityIcons
      color={colors.secondaryColor}
      name="nfc-variant-off"
      size={65}
    />
    <Title>O seu smartphone não possui antena NFC</Title>
    <Description>
      Verificamos que o seu smartphone não possui antena NFC, impossibilitando
      assim utilização do app
    </Description>
  </Container>
);

export { DeviceNotHaveNfc };
