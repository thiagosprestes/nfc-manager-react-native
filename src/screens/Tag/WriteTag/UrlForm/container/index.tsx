import React from 'react';
import { Container, Form, TextInput, Title } from './styles';
import { Button } from '../../../../../components/Button';

interface UrlFormProps {
  onChangeText: (data: string) => void;
  onNext: () => void;
  text: string;
}

const UrlForm = ({ onChangeText, onNext, text }: UrlFormProps) => (
  <Container>
    <Form>
      <Title>Qual link você deseja escrever na tag?</Title>
      <TextInput
        onChangeText={inputText => onChangeText(inputText)}
        value={text}
      />
    </Form>
    <Button isDisabled={text === ''} onPress={onNext}>
      Continuar
    </Button>
  </Container>
);

export { UrlForm };
