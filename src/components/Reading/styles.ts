import styled from 'styled-components/native';
import { Text as TextComponent } from '../Text/styles';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Text = styled(TextComponent)`
  font-size: 22px;
  margin-top: 10px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;
