import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { AppRoutes, AppStackParamsList } from './types';
import { ReadTagScreen } from '../screens/Tag/ReadTag';
import { TagInfoScreen } from '../screens/Tag/TagInfo';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../styles';
import { TouchableOpacity } from 'react-native';
import { EnableNfcScreen } from '../screens/EnableNfc';
import { WriteTagScreen } from '../screens/Tag/WriteTag/Write';
import { OptionsScreen } from '../screens/Tag/WriteTag/Options';
import { SuccessScreen } from '../screens/Tag/WriteTag/Success';
import { TextFormScreen } from '../screens/Tag/WriteTag/TextForm';
import { UrlFormScreen } from '../screens/Tag/WriteTag/UrlForm';
import { LocationScreen } from '../screens/Tag/WriteTag/Location';

const tagNavigationOptions = (
  navigation: NativeStackNavigationProp<{}>,
): NativeStackNavigationOptions => ({
  headerLeft: () => (
    <TouchableOpacity onPress={navigation.goBack}>
      <Entypo
        style={{ marginRight: 20 }}
        color={colors.secondaryColor}
        name="chevron-thin-left"
        size={28}
      />
    </TouchableOpacity>
  ),
  headerShadowVisible: false,
  headerShown: true,
  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTitleStyle: { color: colors.white },
  title: '',
});

const Stack = createNativeStackNavigator<AppStackParamsList>();

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={AppRoutes.Home} component={HomeScreen} />
    <Stack.Group
      screenOptions={({ navigation }) => tagNavigationOptions(navigation)}>
      <Stack.Screen name={AppRoutes.ReadTag} component={ReadTagScreen} />
      <Stack.Screen
        name={AppRoutes.TagInfo}
        component={TagInfoScreen}
        options={{ title: 'Informações da tag' }}
      />
    </Stack.Group>
    <Stack.Screen
      options={({ navigation }) => tagNavigationOptions(navigation)}
      name={AppRoutes.EnableNfc}
      component={EnableNfcScreen}
    />
    <Stack.Group
      screenOptions={({ navigation }) => tagNavigationOptions(navigation)}>
      <Stack.Screen name={AppRoutes.Write} component={WriteTagScreen} />
      <Stack.Screen name={AppRoutes.Options} component={OptionsScreen} />
      <Stack.Screen name={AppRoutes.Success} component={SuccessScreen} />
      <Stack.Screen name={AppRoutes.Text} component={TextFormScreen} />
      <Stack.Screen name={AppRoutes.Url} component={UrlFormScreen} />
      <Stack.Screen name={AppRoutes.Location} component={LocationScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export { Routes };
