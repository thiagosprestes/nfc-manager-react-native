import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonComponent, ButtonComponentText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  isDisabled?: boolean;
  onPress?: () => void;
}

const Button = ({
  children,
  isDisabled = false,
  onPress,
  ...otherProps
}: ButtonProps) => (
  <ButtonComponent
    disabled={isDisabled}
    isDisabled={isDisabled}
    onPress={onPress}
    {...otherProps}>
    <ButtonComponentText>{children}</ButtonComponentText>
  </ButtonComponent>
);

export { Button };
