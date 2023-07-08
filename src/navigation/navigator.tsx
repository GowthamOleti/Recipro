import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/homeScreen/homescreen';
import {
  appLabels,
  fetchExplainerScreenErrorDetails,
  fetchResultScreenTitle,
} from '../../appLabels';
import {Screen, Stack} from './navigationTypes';
import ResultScreen from '../screens/resultScreen/resultScreen';
import AskAPIKeyScreen from '../screens/askAPIKeyScreen/askAPIKeyScreen';
import ExplainerScreen from '../screens/explainerScreen/explainerScreen';
import {useNavigator} from './useNavigator';
import SettingsScreen from '../screens/settingsScreen/settingsScreen';
import SettingsButton from './components/settingsButton';

export default function AppNavigator() {
  const {commonScreenOptions, loading, initRoute} = useNavigator();

  return (
    <NavigationContainer>
      {!loading && (
        <Stack.Navigator initialRouteName={initRoute}>
          <Stack.Screen
            options={{
              title: appLabels.appName,
              ...commonScreenOptions,
              animation: 'fade_from_bottom',
            }}
            name={Screen.ASK_API_KEY}
            component={AskAPIKeyScreen}
          />
          <Stack.Screen
            options={({navigation}) => ({
              title: appLabels.appName,
              ...commonScreenOptions,
              headerRight: () => SettingsButton(navigation),
              animation: 'fade_from_bottom',
            })}
            name={Screen.HOME}
            component={HomeScreen}
          />
          <Stack.Screen
            options={({navigation, route}) => ({
              title: fetchResultScreenTitle[route.params.actionType],
              ...commonScreenOptions,
              headerRight: () => SettingsButton(navigation),
              headerShadowVisible: true,
              animation: 'fade_from_bottom',
            })}
            name={Screen.RESULT}
            component={ResultScreen}
          />
          <Stack.Screen
            options={({route}) => ({
              title: fetchExplainerScreenErrorDetails[route.params.type],
              ...commonScreenOptions,
              animation: 'fade_from_bottom',
            })}
            name={Screen.EXPLAINER}
            component={ExplainerScreen}
          />
          <Stack.Screen
            options={{
              title: appLabels.settingsScreenTitle,
              ...commonScreenOptions,
              animation: 'fade_from_bottom',
            }}
            name={Screen.SETTINGS}
            component={SettingsScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
