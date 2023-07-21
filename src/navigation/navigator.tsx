import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/homeScreen/homescreen';
import {appLabels, fetchResultScreenTitle} from '../../appLabels';
import {Screen, Stack} from './navigationTypes';
import ResultScreen from '../screens/resultScreen/resultScreen';
import AskAPIKeyScreen from '../screens/askAPIKeyScreen/askAPIKeyScreen';
import ExplainerScreen from '../screens/explainerScreen/explainerScreen';
import {useNavigator} from './useNavigator';
import SettingsScreen from '../screens/settingsScreen/settingsScreen';
import SettingsButton from './components/settingsButton';
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
              ...commonScreenOptions,
              headerRight: () => SettingsButton(navigation, Screen.HOME),
              animation: 'slide_from_right',
            })}
            name={Screen.HOME}
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              title: appLabels.apiKeyScreenTitle,
              ...commonScreenOptions,
              animation: 'slide_from_right',
            }}
            name={Screen.ASK_API_KEY}
            component={AskAPIKeyScreen}
          />
          <Stack.Screen
            options={({navigation, route}) => ({
              title: fetchResultScreenTitle[route.params.actionType],
              ...commonScreenOptions,
              headerRight: () => SettingsButton(navigation, Screen.RESULT),
              headerShadowVisible: true,
              animation: 'slide_from_right',
            })}
            name={Screen.RESULT}
            component={ResultScreen}
          />
          <Stack.Screen
            options={({route}) => ({
              title:
                route?.params?.type === ExplainerScreenType.ADD_PAYMENT ||
                route?.params?.type === ExplainerScreenType.KEY_INSTRUCTIONS
                  ? appLabels.apiKeyInstructionsScreenTitle
                  : appLabels.aboutScreenTitle,
              ...commonScreenOptions,
              animation: 'slide_from_right',
            })}
            name={Screen.EXPLAINER}
            component={ExplainerScreen}
          />
          <Stack.Screen
            options={{
              title: appLabels.settingsScreenTitle,
              ...commonScreenOptions,
              animation: 'slide_from_right',
            }}
            name={Screen.SETTINGS}
            component={SettingsScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
