import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../homescreen';
import {appLabels, fetchResultScreenTitle} from '../../appLabels';
import {NavStackParams, Screen} from './navigationTypes';
import ResultScreen from '../screens/resultScreen/resultScreen';
import {useTheme} from '../util/useTheme';
import {IsOpenAIApiKeyPresent} from '../util/handleApiKeys';
import AskAPIKeyScreen from '../screens/askAPIKeyScreen/askAPIKeyScreen';

const Stack = createNativeStackNavigator<NavStackParams>();

export default function AppNavigator() {
  const {colors, fonts} = useTheme();
  const [loading, setLoading] = useState(true);
  const [initRoute, setInitRoute] = useState(Screen.HOME);

  useEffect(() => {
    IsOpenAIApiKeyPresent()
      .then(isOpenAIApiKeyPresent => {
        if (!isOpenAIApiKeyPresent) {
          setInitRoute(Screen.ASK_API_KEY);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <NavigationContainer>
      {!loading && (
        <Stack.Navigator initialRouteName={initRoute}>
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
            name={Screen.ASK_API_KEY}
            component={AskAPIKeyScreen}
          />
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
      )}
    </NavigationContainer>
  );
}
