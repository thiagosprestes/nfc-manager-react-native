import styled from 'styled-components/native';
import { Text as TextComponent } from '../../../../../components/Text/styles';
import { colors } from '../../../../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(TextComponent)`
  font-size: 22px;
  margin: 10px 0;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;

export const Text = styled(TextComponent)`
  font-size: 16px;
  color: ${colors.white};
  text-align: center;
`;
