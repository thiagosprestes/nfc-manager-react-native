import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../../../styles';
import { WriteOptions, WriteOptionsListItem } from '../../../../../types';
import { stylesFromStylesheet } from '../../../../Home/container/styles';

import { Container, Name, Option, OptionsList, Title } from './styles';

interface OptionsProps {
  onSelectOption: (name: WriteOptions) => void;
}

const Options = ({ onSelectOption }: OptionsProps) => {
  const items = [
    {
      icon: (
        <MaterialCommunityIcons
          name="text-box-plus-outline"
          size={32}
          color={colors.secondaryColor}
        />
      ),
      name: WriteOptions.text,
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="file-link-outline"
          size={32}
          color={colors.secondaryColor}
        />
      ),
      name: WriteOptions.url,
    },
    {
      icon: (
        <Ionicons
          name="location-outline"
          size={32}
          color={colors.secondaryColor}
        />
      ),
      name: WriteOptions.location,
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="cellphone"
          size={32}
          color={colors.secondaryColor}
        />
      ),
      name: WriteOptions.phoneNumber,
    },
  ];

  return (
    <Container>
      <Title>O que deseja escrever na sua tag?</Title>
      <OptionsList
        columnWrapperStyle={stylesFromStylesheet.featuresListColumn}
        data={items}
        numColumns={2}
        renderItem={({ item }: { item: WriteOptionsListItem }) => (
          <Option
            disabled={item.name !== WriteOptions.text}
            isDisabled={item.name !== WriteOptions.text}
            onPress={() => onSelectOption(item.name)}>
            {item.icon}
            <Name>{item.name}</Name>
          </Option>
        )}
      />
    </Container>
  );
};

export { Options };
