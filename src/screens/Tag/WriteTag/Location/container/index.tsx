import React from 'react';
import {
  Container,
  Content,
  Description,
  Form,
  LoadingContainer,
  SecondaryButton,
  SecondaryButtonText,
  TextInput,
  Title,
} from './styles';
import { Button } from '../../../../../components/Button';
import { ComponentStates } from '../../../../../types';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../../../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export enum LocationComponentState {
  default = 'default',
  loading = 'loading',
  disabled = 'disabled',
  unauthorized = 'unauthorized',
}

interface LocationProps {
  componentState: LocationComponentState;
  onAuthorize: () => void;
  onChangeText: (inputType: string, data: string) => void;
  onEnableLocation: () => void;
  onNext: () => void;
  onGetLocation: () => void;
  latitude: string;
  longitude: string;
}

const Location = ({
  componentState,
  onAuthorize,
  onChangeText,
  onEnableLocation,
  onGetLocation,
  onNext,
  latitude,
  longitude,
}: LocationProps) => {
  const defaultState = (
    <>
      <Form>
        <Title>Quais as coordenadas da localização que deseja gravar?</Title>
        <TextInput
          keyboardType="numeric"
          placeholder="Latitude"
          onChangeText={inputText => onChangeText('latitude', inputText)}
          value={String(latitude)}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Longitude"
          onChangeText={inputText => onChangeText('longitude', inputText)}
          value={String(longitude)}
        />
      </Form>
      <SecondaryButton onPress={onGetLocation}>
        <SecondaryButtonText>Obter localização atual</SecondaryButtonText>
      </SecondaryButton>
      <Button isDisabled={latitude === '' || longitude === ''} onPress={onNext}>
        Continuar
      </Button>
    </>
  );

  const disabledState = (
    <>
      <Content>
        <MaterialIcons
          name="location-off"
          size={32}
          color={colors.secondaryColor}
        />
        <Title>Habilite a localização</Title>
        <Description>
          Você precisa habilitar a localização para continuar
        </Description>
      </Content>
      <Button onPress={onEnableLocation}>Habilitar</Button>
    </>
  );

  const unauthorizedState = (
    <>
      <Content>
        <MaterialIcons
          name="location-off"
          size={52}
          color={colors.secondaryColor}
        />
        <Title>Sem permissão para detectar a localização</Title>
        <Description>
          Você precisa dar permissão de localização ao app para continuar
        </Description>
      </Content>
      <Button onPress={onAuthorize}>Permitir</Button>
    </>
  );

  const loadingState = (
    <LoadingContainer>
      <ActivityIndicator color={colors.secondaryColor} size={52} />
    </LoadingContainer>
  );

  return (
    <Container>
      {
        {
          [LocationComponentState.default]: defaultState,
          [LocationComponentState.unauthorized]: unauthorizedState,
          [LocationComponentState.disabled]: disabledState,
          [LocationComponentState.loading]: loadingState,
        }[componentState]
      }
    </Container>
  );
};

export { Location };
