export const AppRoutes = {
  Home: 'App.Home',
  ReadTag: 'App.ReadTag',
  TagInfo: 'App.TagInfo',
  EnableNfc: 'App.EnableNfc',
  DeviceNotHaveNfc: 'App.DeviceNotHaveNfc',
  WriteTag: 'App.WriteTag',
} as const;

export type AppStackParamsList = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.ReadTag]: undefined;
  [AppRoutes.TagInfo]: {
    tagData: string;
  };
  [AppRoutes.EnableNfc]: undefined;
  [AppRoutes.DeviceNotHaveNfc]: undefined;
  [AppRoutes.WriteTag]: undefined;
};
