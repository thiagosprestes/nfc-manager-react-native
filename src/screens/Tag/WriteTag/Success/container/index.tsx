import React from 'react';
import { Container, Content, Text, Title } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '../../../../../components/Button';
import { colors } from '../../../../../styles';

interface SuccessProps {
  onNext: () => void;
  writtenData: string;
}

const Success = ({ onNext, writtenData }: SuccessProps) => (
  <Container>
    <Content>
      <MaterialCommunityIcons
        color={colors.secondaryColor}
        name="check-bold"
        size={65}
      />
      <Title>Conteúdo escrito com sucesso!</Title>
      <Text>{writtenData}</Text>
    </Content>
    <Button onPress={onNext}>Concluir</Button>
  </Container>
);

export { Success };
