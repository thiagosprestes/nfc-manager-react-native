import React, { ReactNode } from 'react';
import { ButtonComponent, ButtonComponentText } from './styles';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
}

const Button = ({ children, onPress }: ButtonProps) => (
  <ButtonComponent onPress={onPress}>
    <ButtonComponentText>{children}</ButtonComponentText>
  </ButtonComponent>
);

export { Button };
