import styled from 'styled-components/native';
import { Text } from '../../../../../components/Text/styles';
import {
  colors,
  defaultPadding,
  defaultSize,
  titleSize,
} from '../../../../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${defaultPadding};
  background-color: ${colors.primaryColor};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  background-color: ${colors.textInput};
  border-radius: 8px;
  padding: 12px;
  color: ${colors.white};
  font-weight: bold;
  font-family: 'Roboto-Regular';
  font-size: ${defaultSize};
  margin-bottom: 20px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled(Text)`
  text-align: center;
  color: ${colors.white};
  font-weight: bold;
  font-size: ${titleSize};
  margin: 28px;
`;

export const Description = styled(Text)`
  text-align: center;
`;

export const SecondaryButton = styled.TouchableOpacity`
  margin-bottom: 16px;
`;

export const SecondaryButtonText = styled(Text)`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
