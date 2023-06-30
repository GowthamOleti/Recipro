import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../homescreen';
import {appLabels, fetchResultScreenTitle} from '../../appLabels';
import {Screen, Stack} from './navigationTypes';
import ResultScreen from '../screens/resultScreen/resultScreen';
import {useAppTheme} from '../util/useAppTheme';
import AskAPIKeyScreen from '../screens/askAPIKeyScreen/askAPIKeyScreen';
import ExplainerScreen from '../screens/explainerScreen/explainerScreen';
import {useNavigator} from './useNavigator';
import {SettingsIcon} from '../../assets/icons';
import SettingsScreen from '../screens/settings/settingsScreen';

export default function AppNavigator() {
  const {colors, fonts} = useAppTheme();
  const {loading, initRoute} = useNavigator();

  // TODO: Clean this up

  return (
    <NavigationContainer>
      {!loading && (
        <Stack.Navigator initialRouteName={initRoute}>
          <Stack.Screen
            options={({navigation}) => ({
              title: appLabels.appName,
              headerStyle: {
                backgroundColor: colors.headerBackground,
              },
              headerTitleStyle: {
                fontFamily: fonts.RobotoMono,
              },
              headerShadowVisible: false,
              headerTitleAlign: 'center',
              headerRight: () => (
                <SettingsIcon
                  height={25}
                  width={25}
                  onPress={() => {
                    navigation.navigate(Screen.SETTINGS);
                  }}
                  title="Settings"
                  color="#fff"
                />
              ),
            })}
            name={Screen.ASK_API_KEY}
            component={AskAPIKeyScreen}
          />
          <Stack.Screen
            options={{
              title: 'Instructions',
              headerStyle: {
                backgroundColor: colors.headerBackground,
              },
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: fonts.Sans,
              },
              headerTitleAlign: 'center',
            }}
            name={Screen.EXPLAINER}
            component={ExplainerScreen}
          />
          <Stack.Screen
            options={{
              title: 'Settings',
              headerStyle: {
                backgroundColor: colors.headerBackground,
              },
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: fonts.Sans,
              },
              headerTitleAlign: 'center',
            }}
            name={Screen.SETTINGS}
            component={SettingsScreen}
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
