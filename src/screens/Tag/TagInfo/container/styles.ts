import styled from 'styled-components/native';
import { Text } from '../../../../components/Text/styles';
import {
  colors,
  defaultPadding,
  smallTextSize,
  subtitleSize,
  titleSize,
} from '../../../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primaryColor};
  padding: ${defaultPadding};
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
  font-size: ${titleSize};
  text-align: center;
  margin: 16px 0;
`;

export const DescriptionItem = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const DescriptionItemLabel = styled(Text)`
  color: ${colors.white};
`;

export const DescriptionItemValue = styled(Text)`
  font-size: ${subtitleSize};
  color: ${colors.white};
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
  font-size: ${smallTextSize};
`;
