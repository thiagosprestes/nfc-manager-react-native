import styled from 'styled-components/native';
import { Text } from '../../../../components/Text/styles';
import { colors, defaultPadding } from '../../../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primaryColor};
  padding: ${defaultPadding}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  font-size: 22px;
  text-align: center;
  margin: 10px 0;
`;

export const DescriptionItem = styled(Text)`
  color: ${colors.white};
  font-size: 16px;
`;

export const DescriptionItemValue = styled(Text)`
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ActionItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: 12px;
  border-radius: 8px;
`;

export const ActionItemName = styled(Text)`
  font-weight: bold;
  color: ${colors.black};
  font-size: 12px;
`;
