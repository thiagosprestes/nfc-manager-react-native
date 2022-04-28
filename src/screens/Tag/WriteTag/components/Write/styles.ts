import styled from 'styled-components/native';
import { Text as TextComponent } from '../../../../../components/Text/styles';
import { colors, titleSize } from '../../../../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Text = styled(TextComponent)`
  font-size: ${titleSize};
  margin-top: 10px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;
