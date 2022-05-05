import styled from 'styled-components/native';
import { Text as TextComponent } from '../../../../../components/Text/styles';
import {
  colors,
  defaultPadding,
  mediumTextSize,
  titleSize,
} from '../../../../../styles';

export const Container = styled.View`
  flex: 1;
  padding: ${defaultPadding};
  background-color: ${colors.primaryColor};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(TextComponent)`
  font-size: ${titleSize};
  margin: 10px 0;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;

export const Text = styled(TextComponent)`
  font-size: ${mediumTextSize};
  color: ${colors.white};
  text-align: center;
`;
