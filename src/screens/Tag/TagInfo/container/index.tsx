import React from 'react';
import {
  ActionItem,
  ActionItemName,
  Actions,
  Container,
  Content,
  DescriptionItem,
  DescriptionItemValue,
  Title,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../../styles';

interface TagInfo {
  onReadAgain: () => void;
  tagData: string;
}

const TagInfo = ({ onReadAgain, tagData }: TagInfo) => (
  <Container>
    <Content>
      <MaterialCommunityIcons
        name="file-check-outline"
        size={54}
        color={colors.secondaryColor}
      />
      <Title>Tag encontrada com sucesso!</Title>
      <DescriptionItem>
        Conteúdo gravado na tag:{' '}
        <DescriptionItemValue>{tagData}</DescriptionItemValue>
      </DescriptionItem>
      <DescriptionItem>
        Técnologias utilizadas na tag:{' '}
        <DescriptionItemValue>Ndef</DescriptionItemValue>
      </DescriptionItem>
    </Content>
    <Actions>
      <ActionItem>
        <MaterialCommunityIcons
          name="share-variant"
          size={32}
          color={colors.secondaryColor}
        />
        <ActionItemName>Compartilhar</ActionItemName>
      </ActionItem>
      <ActionItem onPress={onReadAgain}>
        <MaterialCommunityIcons
          name="nfc-search-variant"
          size={32}
          color={colors.secondaryColor}
        />
        <ActionItemName>Ler novamente</ActionItemName>
      </ActionItem>
    </Actions>
  </Container>
);

export { TagInfo };
