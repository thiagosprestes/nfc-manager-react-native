import React from 'react';
import { ActivityIndicator } from 'react-native';
import { DeviceNotHaveNfc } from '../../../components/DeviceNotHaveNfc';
import { colors } from '../../../styles';
import { ComponentStates } from '../../../types';
import { FeaturesListItem } from '../types';
import {
  Container,
  Feature,
  FeaturesList,
  stylesFromStylesheet,
  Text,
} from './styles';

interface HomeProps {
  componentState: ComponentStates;
  featuresList: FeaturesListItem[];
  onGoToReadTag: () => void;
}

const Home = ({ componentState, featuresList, onGoToReadTag }: HomeProps) => {
  const DefaultState = (
    <FeaturesList
      data={featuresList}
      numColumns={2}
      columnWrapperStyle={stylesFromStylesheet.featuresListColumn}
      contentContainerStyle={stylesFromStylesheet.featuresListContainer}
      renderItem={({ item }: { item: FeaturesListItem }) => (
        <Feature onPress={onGoToReadTag}>
          {item.icon}
          <Text>{item.name}</Text>
        </Feature>
      )}
    />
  );

  const NotHaveNfcAdapterState = <DeviceNotHaveNfc />;

  const LoadingState = (
    <ActivityIndicator color={colors.secondaryColor} size={52} />
  );

  return (
    <Container>
      {
        {
          [ComponentStates.default]: DefaultState,
          [ComponentStates.error]: NotHaveNfcAdapterState,
          [ComponentStates.loading]: LoadingState,
        }[componentState]
      }
    </Container>
  );
};

export { Home };
