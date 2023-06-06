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
          options={{
            title: 'GPT Tools',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
          name={Screens.HOME}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            title: 'Result',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name={Screens.READ_EDIT}
          component={ReadEditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
