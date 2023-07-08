import {useContext, useEffect, useState} from 'react';
import {SettingsContext} from '../common/settingsContext';
import {useAppTheme} from '../common/useAppTheme';
import {IsOpenAIApiKeyPresent} from '../util/handleApiKey';
import {fetchAllSettings} from '../util/handleSettings';
import {Screen} from './navigationTypes';

export const useNavigator = () => {
  const [loading, setLoading] = useState(true);
  const [initRoute, setInitRoute] = useState(Screen.HOME);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {appSettings, setAppSettings} = useContext(SettingsContext);
  const {colors, fonts} = useAppTheme();

  const commonScreenOptions = {
    headerStyle: {
      backgroundColor: colors.headerBackground,
    },
    headerTitleStyle: {
      fontFamily: fonts.SansBold,
    },
    headerTintColor: colors.text,
    headerShadowVisible: false,
    headerTitleAlign: 'center' as 'center',
  };

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
    commonScreenOptions,
    initRoute,
    loading,
  };
};
