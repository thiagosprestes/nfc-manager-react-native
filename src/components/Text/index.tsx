import React, { ReactNode } from 'react';

import { Text } from './styles';

interface TextComponentProps {
  children: ReactNode;
}

const TextComponent = ({ children }: TextComponentProps) => {
  return <Text>{children}</Text>;
};

export { TextComponent };
