import { Dimensions, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../../../../components/Text/styles';
import { colors } from '../../../../../styles';

const width = Dimensions.get('window').width - 40;

interface OptionProps {
  isDisabled: boolean;
}

export const Container = styled.View``;

export const Option = styled.TouchableOpacity<OptionProps>`
  background-color: ${colors.white};
  padding: 32px 20px;
  border-radius: 8px;
  width: ${width / 2 - 25}px;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  opacity: ${props => (props.isDisabled ? 0.5 : 1)};
`;

export const Title = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 32px;
`;

export const Name = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  text-align: center;
`;

export const OptionsList = styled.FlatList`` as unknown as typeof FlatList;
