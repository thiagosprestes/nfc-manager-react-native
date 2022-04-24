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

export enum WriteTagSteps {
  options = 'options',
  content = 'content',
  write = 'write',
  success = 'success',
}

export enum WriteOptions {
  text = 'Texto',
  url = 'URL',
  location = 'Localização',
  phoneNumber = 'Número de telefone',
}

export interface WriteOptionsListItem {
  name: WriteOptions;
  icon: ReactElement;
}
