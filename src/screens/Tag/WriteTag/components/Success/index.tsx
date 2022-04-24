import React from 'react';
import { Container, Content, Text } from './styles';
import { colors } from '../../../../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '../../../../../components/Button';

interface SuccessProps {
  onNext: () => void;
}

const Success = ({ onNext }: SuccessProps) => (
  <Container>
    <Content>
      <MaterialCommunityIcons
        color={colors.secondaryColor}
        name="check-bold"
        size={65}
      />
      <Text>Conteúdo escrito com sucesso!</Text>
    </Content>
    <Button onPress={onNext}>Concluir</Button>
  </Container>
);

export { Success };
