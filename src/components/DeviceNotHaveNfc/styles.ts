import styled from 'styled-components/native';
import { Text } from '../Text/styles';
import { colors, defaultPadding } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: ${defaultPadding};
  background-color: ${colors.primaryColor};
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: 22px;
  margin: 10px 0;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;

export const Description = styled(Text)`
  color: ${colors.white};
  text-align: center;
`;
