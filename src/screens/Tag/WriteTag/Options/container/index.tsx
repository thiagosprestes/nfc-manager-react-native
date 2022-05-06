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

  const isOptionDisabled = (itemName: string) =>
    itemName === WriteOptions.phoneNumber;

  return (
    <Container>
      <OptionsList
        columnWrapperStyle={stylesFromStylesheet.featuresListColumn}
        contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}
        data={items}
        ListHeaderComponent={<Title>O que deseja escrever na sua tag?</Title>}
        numColumns={2}
        renderItem={({ item }: { item: WriteOptionsListItem }) => (
          <Option
            disabled={isOptionDisabled(item.name)}
            isDisabled={isOptionDisabled(item.name)}
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
