export const AppRoutes = {
  Home: 'App.Home',
  ReadTag: 'App.ReadTag',
} as const;

export type AppStackParamsList = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.ReadTag]: undefined;
};
