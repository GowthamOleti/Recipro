import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReadEditScreen from '../screens/readEditScreen/readEditScreen';
import HomeScreen from '../homescreen';
import {ReadEditScreenType} from '../util/constants';
import {appLabels} from '../../labels';
import {color, font} from '../util/theme';
import {NavStackParams, Screen} from './navigationTypes';

const Stack = createNativeStackNavigator<NavStackParams>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: appLabels.appName,
            headerStyle: {
              backgroundColor: color.black,
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
          options={({route}) => ({
            title:
              route?.params?.type === ReadEditScreenType.READ
                ? route.params?.title
                : appLabels.readEditScreen.editHeaderTitle,
            headerStyle: {
              backgroundColor:
                route?.params?.type === ReadEditScreenType.READ
                  ? color.grey
                  : color.black,
            },
            headerTintColor: color.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
          name={Screen.READ_EDIT}
          component={ReadEditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
