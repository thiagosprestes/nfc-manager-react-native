export const AppRoutes = {
  Home: 'App.Home',
  ReadTag: 'App.ReadTag',
  TagInfo: 'App.TagInfo',
  EnableNfc: 'App.EnableNfc',
  DeviceNotHaveNfc: 'App.DeviceNotHaveNfc',
} as const;

export type AppStackParamsList = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.ReadTag]: undefined;
  [AppRoutes.TagInfo]: undefined;
  [AppRoutes.EnableNfc]: undefined;
  [AppRoutes.DeviceNotHaveNfc]: undefined;
};
