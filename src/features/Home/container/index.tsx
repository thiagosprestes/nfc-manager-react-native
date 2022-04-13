import React from 'react';
import { FeaturesListItem } from '../types';
import {
  Container,
  Feature,
  FeaturesList,
  stylesFromStylesheet,
  Text,
} from './styles';

interface HomeProps {
  featuresList: FeaturesListItem[];
  onGoToReadTag: () => void;
}

const Home = ({ featuresList, onGoToReadTag }: HomeProps) => (
  <Container>
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
  </Container>
);

export { Home };
