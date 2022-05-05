import styled from 'styled-components/native';
import { colors, defaultPadding, titleSize } from '../../../../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primaryColor};
  justify-content: center;
  padding: ${defaultPadding};
`;
