import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { AppRoutes, AppStackParamsList } from './types';
import { ReadTagScreen } from '../screens/ReadTag';
import { TagInfoScreen } from '../screens/TagInfo';

const Stack = createNativeStackNavigator<AppStackParamsList>();

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={AppRoutes.Home} component={HomeScreen} />
    <Stack.Group>
      <Stack.Screen name={AppRoutes.ReadTag} component={ReadTagScreen} />
      <Stack.Screen name={AppRoutes.TagInfo} component={TagInfoScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export { Routes };
