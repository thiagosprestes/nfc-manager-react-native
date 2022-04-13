import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../features/Home';
import { AppRoutes, AppStackParamsList } from './types';
import { ReadTagScreen } from '../features/ReadTag';

const Stack = createNativeStackNavigator<AppStackParamsList>();

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={AppRoutes.Home} component={HomeScreen} />
    <Stack.Screen name={AppRoutes.ReadTag} component={ReadTagScreen} />
  </Stack.Navigator>
);

export { Routes };
