import { Dimensions, FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Text as TextComponent } from '../../../components/Text/styles';
import { colors } from '../../../styles';

const width = Dimensions.get('window').width - 40;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  background-color: ${colors.primaryColor};
`;

export const Feature = styled.TouchableOpacity`
  background-color: ${colors.white};
  padding: 30px;
  border-radius: 8px;
  width: ${width / 2 - 10}px;
  align-items: center;
`;

export const Text = styled(TextComponent)`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
  color: ${colors.black};
`;

export const FeaturesList = styled.FlatList`` as unknown as typeof FlatList;

export const stylesFromStylesheet = StyleSheet.create({
  featuresListColumn: {
    justifyContent: 'space-between',
  },
  featuresListContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
