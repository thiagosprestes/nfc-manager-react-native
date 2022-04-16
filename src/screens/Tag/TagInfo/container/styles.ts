import styled from 'styled-components/native';
import { Text } from '../../../../components/Text/styles';
import { colors, defaultPadding } from '../../../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primaryColor};
  justify-content: center;
  padding: ${defaultPadding}px;
`;

export const TagInfoItem = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 16px;
`;

export const Title = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
`;

export const Value = styled(Text)`
  color: ${colors.white};
`;
