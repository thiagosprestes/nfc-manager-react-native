import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { AppState, PermissionsAndroid } from 'react-native';
import { LocationErrorCode } from 'react-native-get-location';
import { WrittenOptionValue } from '../../../../hooks/useNfc';
import { AppRoutes, AppStackParamsList } from '../../../../navigation/types';
import { Location, LocationComponentState } from './container';
import RNLocation from 'react-native-get-location';
import { onEnableLocation } from '../../../../utils/nativeModules/nfcManager';

interface LocationScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamsList, 'App.UrlForm'>;
}

const LocationScreen = ({ navigation }: LocationScreenProps) => {
  const [componentState, setComponentState] = useState(
    LocationComponentState.default,
  );
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleOnChangeText = (inputType: string, value: string) => {
    if (inputType === 'latitude') {
      setLatitude(value);
      return;
    }

    setLongitude(value);
  };

  const handleOnNext = () => {
    navigation.navigate(AppRoutes.Write, {
      tagContent: `geo:${latitude},${longitude}`,
      writtenOptionValue: WrittenOptionValue.url,
    });
  };

  const getLocation = async () => {
    setComponentState(LocationComponentState.loading);

    try {
      const locationData = await RNLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
      });

      setLatitude(String(locationData.latitude));
      setLongitude(String(locationData.longitude));

      setComponentState(LocationComponentState.default);
    } catch (error: any) {
      const errorState = {
        ['UNAUTHORIZED']: LocationComponentState.unauthorized,
        ['CANCELLED']: LocationComponentState.unauthorized,
        ['UNAVAILABLE']: LocationComponentState.disabled,
        ['TIMEOUT']: LocationComponentState.unauthorized,
      };

      setComponentState(errorState[error.code as LocationErrorCode]);
    }
  };

  const requestPermission = async () => {
    setComponentState(LocationComponentState.loading);

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Habilite a localização',
          message: 'O app precisa de acesso a localização para continuar',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setComponentState(LocationComponentState.default);
        return;
      }

      setComponentState(LocationComponentState.unauthorized);
    } catch (err) {
      console.warn(err);
      setComponentState(LocationComponentState.unauthorized);
    }
  };

  const handleOnGoToEnableLocation = async () => {
    await onEnableLocation();
  };

  const onSetDefaultState = () => {
    setComponentState(LocationComponentState.default);
  };

  useEffect(() => {
    const locationSubscription = AppState.addEventListener(
      'focus',
      onSetDefaultState,
    );

    return () => {
      locationSubscription.remove();
    };
  }, []);

  return (
    <Location
      componentState={componentState}
      onAuthorize={requestPermission}
      onChangeText={handleOnChangeText}
      onEnableLocation={handleOnGoToEnableLocation}
      onGetLocation={getLocation}
      onNext={handleOnNext}
      latitude={latitude}
      longitude={longitude}
    />
  );
};

export { LocationScreen };
