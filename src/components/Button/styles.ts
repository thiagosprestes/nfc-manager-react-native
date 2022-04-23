import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles';
import { Text } from '../Text/styles';

interface ButtonComponentProps {
  isDisabled: boolean;
}

export const ButtonComponent = styled(TouchableOpacity)<ButtonComponentProps>`
  background-color: ${colors.secondaryColor};
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  opacity: ${props => (props.isDisabled ? 0.5 : 1)};
`;

export const ButtonComponentText = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;
