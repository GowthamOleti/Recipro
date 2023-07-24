import {useContext, useEffect, useState} from 'react';
import {SettingsContext} from '../common/settingsContext';
import {useAppTheme} from '../common/useAppTheme';
import {
  analyticsTags,
  fetchInitScreenTag,
  trackAction,
} from '../util/analytics';
import {IsOpenAIApiKeyPresent} from '../util/handleApiKey';
import {fetchAllSettings, isFirstTime} from '../util/handleSettings';
import {logError} from '../util/helpers';
import {Screen} from './navigationTypes';

export const useNavigator = () => {
  const [initRoute, setInitRoute] = useState<Screen>();
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
    animation: 'slide_from_right' as 'slide_from_right',
    headerBackTitleVisible: false,
  };

  useEffect(() => {
    isFirstTime()
      .then(firstTime => {
        if (firstTime) {
          trackAction(analyticsTags.init.firstTime);
          setInitRoute(Screen.Explainer);
        } else {
          trackAction(analyticsTags.init.notFirstTime);
          Promise.all([IsOpenAIApiKeyPresent(), fetchAllSettings()])
            .then(([isOpenAIApiKeyPresent, currentSettings]) => {
              if (currentSettings) {
                setAppSettings(currentSettings);
              }
              if (!isOpenAIApiKeyPresent) {
                trackAction(analyticsTags.init.keyNotPresent);
                setInitRoute(Screen.AskApiKey);
              } else {
                trackAction(analyticsTags.init.keyPresent);
                setInitRoute(Screen.Home);
              }
            })
            .catch(error => {
              logError(error);
            });
        }
      })
      .catch(error => {
        logError(error);
      });
  }, [setAppSettings]);

  useEffect(() => {
    if (initRoute) {
      trackAction(fetchInitScreenTag[initRoute]);
    }
  }, [initRoute]);

  return {
    commonScreenOptions,
    initRoute,
  };
};
