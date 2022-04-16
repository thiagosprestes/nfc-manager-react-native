import styled from 'styled-components/native';
import { colors } from '../../styles';
import { Text } from '../Text/styles';

export const ButtonComponent = styled.TouchableOpacity`
  background-color: ${colors.secondaryColor};
  width: 100%;
  padding: 14px;
  border-radius: 12px;
`;

export const ButtonComponentText = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;
