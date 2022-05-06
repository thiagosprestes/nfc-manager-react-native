import { WrittenOptionValue } from '../hooks/useNfc';
import { WriteOptions } from '../types';

export const AppRoutes = {
  Home: 'App.Home',
  ReadTag: 'App.ReadTag',
  TagInfo: 'App.TagInfo',
  EnableNfc: 'App.EnableNfc',
  DeviceNotHaveNfc: 'App.DeviceNotHaveNfc',
  Options: 'App.Options',
  Text: 'App.TextForm',
  Url: 'App.UrlForm',
  Write: 'App.Write',
  Success: 'App.Success',
  Location: 'App.Location',
} as const;

export type AppStackParamsList = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.ReadTag]: undefined;
  [AppRoutes.TagInfo]: {
    tagData: string;
  };
  [AppRoutes.EnableNfc]: { nextScreen: keyof AppStackParamsList };
  [AppRoutes.DeviceNotHaveNfc]: undefined;
  [AppRoutes.Options]: undefined;
  [AppRoutes.Text]: undefined;
  [AppRoutes.Url]: undefined;
  [AppRoutes.Location]: undefined;
  [AppRoutes.Success]: {
    tag: string;
  };
  [AppRoutes.Write]: {
    tagContent: string;
    writtenOptionValue: WrittenOptionValue;
  };
};
