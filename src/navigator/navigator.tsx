import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReadEditScreen from '../screens/readEditScreen/readEditScreen';
import HomeScreen from '../homescreen';
import {Screens} from '../util/constants';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={Screens.HOME}
          component={HomeScreen}
        />
        <Stack.Screen name={Screens.READ_EDIT} component={ReadEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
