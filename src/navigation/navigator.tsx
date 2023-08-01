import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {appLabels, fetchResultScreenTitle} from '../../appLabels';
import {Screen, Stack} from './navigationTypes';
import ResultScreen from '../screens/resultScreen/resultScreen';
import ExplainerScreen from '../screens/explainerScreen/explainerScreen';
import {useNavigator} from './useNavigator';
import SettingsScreen from '../screens/settingsScreen/settingsScreen';
import SettingsButton from '../common/settingsButton';
import {ExplainerScreenType} from '../common/constants';
import HomeScreen from '../screens/homeScreen/homeScreen';
import AskApiKeyScreen from '../screens/askApiKeyScreen/askApiKeyScreen';
import SplashScreen from '../screens/splashScreen/splashScreen';

export default function AppNavigator() {
  const {commonScreenOptions} = useNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screen.Splash}>
        <Stack.Screen
          options={() => ({
            title: '',
            ...commonScreenOptions,
          })}
          name={Screen.Splash}
          component={SplashScreen}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: appLabels.appName,
            headerRight: () => SettingsButton(navigation, Screen.Home),
            ...commonScreenOptions,
          })}
          name={Screen.Home}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            title: appLabels.apiKeyScreenTitle,
            ...commonScreenOptions,
          }}
          name={Screen.AskApiKey}
          component={AskApiKeyScreen}
        />
        <Stack.Screen
          options={({navigation, route}) => ({
            title: fetchResultScreenTitle[route.params.actionType],
            headerRight: () => SettingsButton(navigation, Screen.Result),
            ...commonScreenOptions,
            headerShadowVisible: true,
          })}
          name={Screen.Result}
          component={ResultScreen}
        />
        <Stack.Screen
          options={({route}) => ({
            title:
              route?.params?.type === ExplainerScreenType.AddPayment ||
              route?.params?.type === ExplainerScreenType.KeyInstructions
                ? appLabels.apiKeyInstructionsScreenTitle
                : appLabels.aboutScreenTitle,
            ...commonScreenOptions,
          })}
          name={Screen.Explainer}
          component={ExplainerScreen}
        />
        <Stack.Screen
          options={{
            title: appLabels.settingsScreenTitle,
            ...commonScreenOptions,
          }}
          name={Screen.Settings}
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
