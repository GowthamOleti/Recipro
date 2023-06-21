import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../homescreen';
import {appLabels} from '../../appLabels';
import {color, font} from '../util/theme';
import {NavStackParams, Screen} from './navigationTypes';
import ResultScreen from '../screens/resultScreen/resultScreen';

const Stack = createNativeStackNavigator<NavStackParams>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: appLabels.appName,
            headerStyle: {
              backgroundColor: color.grey,
            },
            headerTintColor: color.white,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: font.RobotoMono,
            },
          }}
          name={Screen.HOME}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            title: appLabels.resultScreenHeader,
            headerTintColor: color.white,
            headerStyle: {
              backgroundColor: color.grey,
            },
            headerTitleStyle: {
              fontFamily: font.AvenirBold,
            },
          }}
          name={Screen.RESULT}
          component={ResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
