import styled from 'styled-components/native';
import { Text as TextComponent } from '../../../../components/Text/styles';
import { colors, defaultPadding, titleSize } from '../../../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primaryColor};
  justify-content: center;
  padding: ${defaultPadding};
`;

export const Text = styled(TextComponent)`
  font-size: ${titleSize};
  margin-top: 10px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;
