import styled from 'styled-components/native';
import { Text } from '../../../../../components/Text/styles';
import { colors } from '../../../../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const TextInput = styled.TextInput`
  background-color: ${colors.textInput};
  border-radius: 8px;
  padding: 12px;
  color: ${colors.white};
  font-weight: bold;
  font-family: 'Roboto-Regular';
  font-size: 14px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled(Text)`
  text-align: center;
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 28px;
`;
