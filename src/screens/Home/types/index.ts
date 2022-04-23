import { ReactElement } from 'react';

export enum FeatureOptions {
  read = 'Ler',
  write = 'Escrever',
}

export interface FeaturesListItem {
  name: FeatureOptions;
  icon: ReactElement;
}
