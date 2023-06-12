/**
 * GPT Tools
 *
 */

import React, {useState} from 'react';
import {defaultContextData, GlobalContext} from './globalContext';
import AppNavigator from './src/navigation/navigator';

function App(): JSX.Element {
  const [contextData, setContextData] = useState(defaultContextData);

  return (
    <GlobalContext.Provider value={{contextData, setContextData}}>
      <AppNavigator />
    </GlobalContext.Provider>
  );
}

export default App;
