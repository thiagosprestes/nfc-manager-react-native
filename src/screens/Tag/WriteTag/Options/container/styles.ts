import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../../../../components/Text/styles';
import {
  colors,
  defaultPadding,
  deviceWidth,
  mediumTextSize,
  titleSize,
} from '../../../../../styles';

interface OptionProps {
  isDisabled: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primaryColor};
  justify-content: center;
  padding: ${defaultPadding};
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  background-color: ${colors.white};
  padding: 32px 20px;
  border-radius: 8px;
  width: ${deviceWidth / 2 - 25}px;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  opacity: ${props => (props.isDisabled ? 0.5 : 1)};
`;

export const Title = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
  font-size: ${titleSize};
  margin-bottom: 32px;
  text-align: center;
`;

export const Name = styled(Text)`
  font-size: ${mediumTextSize};
  font-weight: bold;
  color: ${colors.black};
  text-align: center;
`;

export const OptionsList = styled.FlatList`` as unknown as typeof FlatList;
