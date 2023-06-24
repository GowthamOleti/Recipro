import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../homescreen';
import {appLabels, fetchResultScreenTitle} from '../../appLabels';
import {NavStackParams, Screen} from './navigationTypes';
import ResultScreen from '../screens/resultScreen/resultScreen';
import {useTheme} from '../util/useTheme';

const Stack = createNativeStackNavigator<NavStackParams>();

export default function AppNavigator() {
  const {colors, fonts} = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: appLabels.appName,
            headerStyle: {
              backgroundColor: colors.headerBackground,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: fonts.RobotoMono,
            },
          }}
          name={Screen.HOME}
          component={HomeScreen}
        />
        <Stack.Screen
          options={({route}) => ({
            title: fetchResultScreenTitle[route.params.actionType],
            headerTintColor: colors.text,
            headerStyle: {
              backgroundColor: colors.headerBackground,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: fonts.Sans,
            },
          })}
          name={Screen.RESULT}
          component={ResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
