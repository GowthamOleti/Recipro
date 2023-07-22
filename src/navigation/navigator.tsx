import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/homeScreen/homeScreen';
import {appLabels, fetchResultScreenTitle} from '../../appLabels';
import {Screen, Stack} from './navigationTypes';
import ResultScreen from '../screens/resultScreen/resultScreen';
import AskApiKeyScreen from '../screens/askApiKeyScreen/askApiKeyScreen';
import ExplainerScreen from '../screens/explainerScreen/explainerScreen';
import {useNavigator} from './useNavigator';
import SettingsScreen from '../screens/settingsScreen/settingsScreen';
import SettingsButton from '../common/settingsButton';
import {ExplainerScreenType} from '../common/constants';

export default function AppNavigator() {
  const {commonScreenOptions, initRoute} = useNavigator();

  return (
    <NavigationContainer>
      {initRoute && (
        <Stack.Navigator initialRouteName={initRoute}>
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
      )}
    </NavigationContainer>
  );
}
