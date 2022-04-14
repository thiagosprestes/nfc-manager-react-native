import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Info, TagInfoItem, Title, Value } from './styles';

const TagInfo = () => (
  <Container>
    <ScrollView>
      <TagInfoItem>
        <Info>
          <Title>Tipo</Title>
          <Value>NPX</Value>
        </Info>
      </TagInfoItem>
    </ScrollView>
  </Container>
);

export { TagInfo };
