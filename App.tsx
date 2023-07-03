/**
 * GPT Tools
 *
 */

import React, {useState} from 'react';
import AppNavigator from './src/navigation/navigator';
import {ToastProvider} from 'react-native-toast-notifications';
import {SettingsContext} from './src/common/settingsContext';
import {AppSetting} from './src/common/constants';

function App(): JSX.Element {
  const [appSettings, setAppSettings] = useState(
    new Map<AppSetting, boolean>(),
  );

  return (
    <SettingsContext.Provider value={{appSettings, setAppSettings}}>
      <ToastProvider>
        <AppNavigator />
      </ToastProvider>
    </SettingsContext.Provider>
  );
}

export default App;
