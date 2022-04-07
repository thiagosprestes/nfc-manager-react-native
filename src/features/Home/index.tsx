import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Feature, Text } from './styles';

const Home = () => {
  return (
    <Container>
      <Feature>
        <Icon name="text-box-search-outline" />
        <Text>Ler</Text>
      </Feature>
    </Container>
  );
};

export { Home };
