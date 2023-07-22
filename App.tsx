/**
 * TextCraft
 *
 */

import React, {useState} from 'react';
import AppNavigator from './src/navigation/navigator';
import {ToastProvider} from 'react-native-toast-notifications';
import {defaultSettings, SettingsContext} from './src/common/settingsContext';
import {LogBox} from 'react-native';

function App(): JSX.Element {
  const [appSettings, setAppSettings] = useState(defaultSettings);

  LogBox.ignoreLogs(['new NativeEventEmitter']);

  return (
    <SettingsContext.Provider value={{appSettings, setAppSettings}}>
      <ToastProvider>
        <AppNavigator />
      </ToastProvider>
    </SettingsContext.Provider>
  );
}

export default App;
