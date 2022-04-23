import React, { useState } from 'react';
import { WriteOptions } from '../../../../../types';
import { Container, Form, TextInput, Title } from './styles';
import { Button } from '../../../../../components/Button';

interface ContentProps {
  onNext: () => void;
  selectedOption?: WriteOptions;
}

const Content = ({ onNext, selectedOption }: ContentProps) => {
  const textInitalState = {
    [WriteOptions.location]: '',
    [WriteOptions.phoneNumber]: '',
    [WriteOptions.text]: '',
    [WriteOptions.url]: 'https://',
  }[selectedOption!];

  const [text, setText] = useState(textInitalState);

  const TextForm = (
    <>
      <Form>
        <Title>Qual texto deseja escrever na tag?</Title>
        <TextInput onChangeText={text => setText(text)} value={text} />
      </Form>
      <Button isDisabled={text === ''} onPress={onNext}>
        Continuar
      </Button>
    </>
  );

  const UrlForm = (
    <>
      <Form>
        <Title>Insira a URL que deseja escrever na tag</Title>
        <TextInput onChangeText={text => setText(text)} value={text} />
      </Form>
      <Button isDisabled={text === ''} onPress={onNext}>
        Continuar
      </Button>
    </>
  );

  const phoneNumberform = <Container></Container>;

  return (
    <Container>
      {
        {
          [WriteOptions.text]: TextForm,
          [WriteOptions.url]: UrlForm,
          [WriteOptions.location]: UrlForm,
          [WriteOptions.phoneNumber]: phoneNumberform,
        }[selectedOption!]
      }
    </Container>
  );
};

export { Content };
