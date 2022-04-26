import React from 'react';
import { Container, Form, TextInput, Title } from './styles';
import { Button } from '../../../../../components/Button';
import { WriteOptions } from '../../../../../types';

interface ContentProps {
  onNext: () => void;
  selectedOption?: WriteOptions;
  onChangeText: (data: string) => void;
  text: string;
}

const Content = ({
  onNext,
  selectedOption,
  onChangeText,
  text,
}: ContentProps) => {
  const TextForm = (
    <>
      <Form>
        <Title>Qual texto deseja escrever na tag?</Title>
        <TextInput onChangeText={text => onChangeText(text)} value={text} />
      </Form>
      <Button isDisabled={text === ''} onPress={onNext}>
        Continuar
      </Button>
    </>
  );

  const UrlForm = <></>;

  const phoneNumberform = <></>;

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
