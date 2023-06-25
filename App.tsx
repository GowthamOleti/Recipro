/**
 * GPT Tools
 *
 */

import React from 'react';
import AppNavigator from './src/navigation/navigator';
import {ToastProvider} from 'react-native-toast-notifications';

function App(): JSX.Element {
  return (
    <ToastProvider>
      <AppNavigator />
    </ToastProvider>
  );
}

export default App;
