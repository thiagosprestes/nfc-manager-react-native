import styled from 'styled-components/native';
import { Text } from '../../../../../components/Text/styles';
import {
  colors,
  defaultPadding,
  defaultSize,
  titleSize,
} from '../../../../../styles';

export const Container = styled.View`
  flex: 1;
  padding: ${defaultPadding};
  background-color: ${colors.primaryColor};
`;

export const TextInput = styled.TextInput`
  background-color: ${colors.textInput};
  border-radius: 8px;
  padding: 12px;
  color: ${colors.white};
  font-weight: bold;
  font-family: 'Roboto-Regular';
  font-size: ${defaultSize};
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled(Text)`
  text-align: center;
  color: ${colors.white};
  font-weight: bold;
  font-size: ${titleSize};
  margin-bottom: 28px;
`;
