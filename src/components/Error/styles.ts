import styled from 'styled-components/native';
import { colors } from '../../styles';
import { Text } from '../Text/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
  font-size: 20px;
  margin-top: 16px;
`;
