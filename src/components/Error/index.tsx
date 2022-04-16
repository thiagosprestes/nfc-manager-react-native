import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { ErrorType } from '../../types';
import { Button } from '../Button';
import { Container, Title } from './styles';
import error from '../../assets/animations/error.json';
import notFound from '../../assets/animations/notFound.json';
import { View } from 'react-native';

interface ErrorProps {
  errorText?: string;
  onRetry: () => void;
  type: ErrorType;
}

const Error = ({ errorText, onRetry, type }: ErrorProps) => {
  const ErrorContainer = (
    <>
      <View style={{ height: 130, width: 130 }}>
        <AnimatedLottieView source={error} autoPlay loop={false} />
      </View>
      <Title>{errorText ?? 'Erro ao ler dados da tag'}</Title>
    </>
  );

  const NotFoundContainer = (
    <>
      <View style={{ height: 110, width: 110 }}>
        <AnimatedLottieView source={notFound} autoPlay loop={false} />
      </View>
      <Title>Nenhuma tag encontrada</Title>
    </>
  );

  return (
    <>
      <Container>
        {
          {
            [ErrorType.error]: ErrorContainer,
            [ErrorType.notFound]: NotFoundContainer,
          }[type]
        }
      </Container>
      <Button onPress={onRetry}>Tentar novamente</Button>
    </>
  );
};

export { Error };
