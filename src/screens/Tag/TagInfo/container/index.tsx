import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Info, TagInfoItem, Title, Value } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../../styles';

const TagInfo = () => (
  <Container>
    <ScrollView>
      <TagInfoItem>
        <MaterialCommunityIcons
          name="tag-outline"
          size={36}
          color={colors.secondaryColor}
        />
        <Info>
          <Title>Tipo</Title>
          <Value>NPX</Value>
        </Info>
      </TagInfoItem>
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
