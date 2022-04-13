import styled from 'styled-components/native';
import { Text as TextComponent } from '../../../components/Text/styles';
import { colors } from '../../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primaryColor};
  justify-content: center;
  padding: 35px;
`;

export const Text = styled(TextComponent)`
  font-size: 22px;
  margin-top: 10px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;
