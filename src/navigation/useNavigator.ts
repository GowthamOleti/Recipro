import {useContext, useEffect, useState} from 'react';
import {SettingsContext} from '../common/settingsContext';
import {IsOpenAIApiKeyPresent} from '../util/handleApiKey';
import {fetchAllSettings} from '../util/handleSettings';
import {Screen} from './navigationTypes';

export const useNavigator = () => {
  const [loading, setLoading] = useState(true);
  const [initRoute, setInitRoute] = useState(Screen.HOME);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {appSettings, setAppSettings} = useContext(SettingsContext);

  useEffect(() => {
    Promise.all([IsOpenAIApiKeyPresent(), fetchAllSettings()])
      .then(([isOpenAIApiKeyPresent, currentSettings]) => {
        if (!isOpenAIApiKeyPresent) {
          setInitRoute(Screen.ASK_API_KEY);
        }
        if (currentSettings) {
          setAppSettings(currentSettings);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setInitRoute, setAppSettings]);

  return {
    initRoute,
    loading,
  };
};
