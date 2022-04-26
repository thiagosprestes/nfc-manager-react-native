import React from 'react';
import {
  ActionItem,
  ActionItemName,
  Actions,
  Container,
  Content,
  DescriptionItem,
  DescriptionItemLabel,
  DescriptionItemValue,
  Title,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../../styles';

interface TagInfo {
  onReadAgain: () => void;
  onShare: () => void;
  tagData: string;
}

const TagInfo = ({ onReadAgain, onShare, tagData }: TagInfo) => (
  <Container>
    <Content>
      <MaterialCommunityIcons
        name="file-check-outline"
        size={54}
        color={colors.secondaryColor}
      />
      <Title>Tag encontrada com sucesso!</Title>
      <DescriptionItem>
        <DescriptionItemLabel>Conteúdo gravado na tag:</DescriptionItemLabel>
        <DescriptionItemValue>{tagData}</DescriptionItemValue>
      </DescriptionItem>
    </Content>
    <Actions>
      <ActionItem onPress={onShare}>
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
