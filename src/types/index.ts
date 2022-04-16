import { ReactElement } from 'react';

export interface FeaturesListItem {
  name: string;
  icon: ReactElement;
}

export enum ErrorType {
  notFound = 'notFound',
  error = 'error',
}

export enum ComponentStates {
  default = 'default',
  loading = 'loading',
  error = 'error',
}
