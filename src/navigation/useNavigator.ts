import {useContext, useEffect, useState} from 'react';
import {SettingsContext} from '../common/settingsContext';
import {useAppTheme} from '../common/useAppTheme';
import {analyticsTags, trackAction} from '../util/analytics';
import {IsOpenAIApiKeyPresent} from '../util/handleApiKey';
import {fetchAllSettings, isFirstTime} from '../util/handleSettings';
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
  };

  useEffect(() => {
    isFirstTime().then(firstTime => {
      if (firstTime) {
        trackAction(analyticsTags.init.firstTime);
        setInitRoute(Screen.Explainer);
        trackAction(
          analyticsTags.init.initScreen.replace(
            '{initScreenName}',
            Screen.Explainer.toLowerCase(),
          ),
        );
      } else {
        trackAction(analyticsTags.init.notFirstTime);
      }
    });
  }, []);

  useEffect(() => {
    Promise.all([IsOpenAIApiKeyPresent(), fetchAllSettings()])
      .then(([isOpenAIApiKeyPresent, currentSettings]) => {
        if (!isOpenAIApiKeyPresent) {
          trackAction(analyticsTags.init.keyNotPresent);
          setInitRoute(Screen.AskApiKey);
          trackAction(
            analyticsTags.init.initScreen.replace(
              '{initScreenName}',
              Screen.AskApiKey.toLowerCase(),
            ),
          );
        } else {
          trackAction(analyticsTags.init.keyPresent);
        }
        if (currentSettings) {
          setAppSettings(currentSettings);
        }
        setInitRoute(Screen.Home);
        trackAction(
          analyticsTags.init.initScreen.replace(
            '{initScreenName}',
            Screen.Home.toLowerCase(),
          ),
        );
      })
      .catch(error => {
        console.log(error);
      });
  }, [setInitRoute, setAppSettings]);

  return {
    commonScreenOptions,
    initRoute,
  };
};
