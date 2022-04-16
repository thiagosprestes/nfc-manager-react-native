import React from 'react';
import { Container, Description, EnableNfcInfo, Title } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '../../../components/Button';
import { colors } from '../../../styles';

interface EnableNfcProps {
  onGoToEnableNfc: () => void;
}

const EnableNfc = ({ onGoToEnableNfc }: EnableNfcProps) => (
  <Container>
    <EnableNfcInfo>
      <MaterialCommunityIcons
        color={colors.secondaryColor}
        name="nfc"
        size={65}
      />
      <Title>NFC desabilitado</Title>
      <Description>Habilite o NFC do seu smartphone para continuar</Description>
    </EnableNfcInfo>
    <Button onPress={onGoToEnableNfc}>Habilitar NFC</Button>
  </Container>
);

export { EnableNfc };
