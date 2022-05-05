import styled from 'styled-components/native';
import { Text } from '../../../components/Text/styles';
import { colors, defaultPadding, titleSize } from '../../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primaryColor};
  justify-content: center;
  padding: ${defaultPadding};
`;

export const EnableNfcInfo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: ${titleSize};
  margin: 10px 0;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;

export const Description = styled(Text)`
  color: ${colors.white};
  text-align: center;
`;
