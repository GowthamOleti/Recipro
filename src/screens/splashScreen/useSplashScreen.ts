import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect} from 'react';
import {SettingsContext} from '../../common/settingsContext';
import {useAppTheme} from '../../common/useAppTheme';
import {Screen} from '../../navigation/navigationTypes';
import {
  analyticsTags,
  fetchInitScreenTag,
  trackAction,
} from '../../util/analytics';
import {IsOpenAIApiKeyPresent} from '../../util/handleApiKey';
import {fetchAllSettings, isFirstTime} from '../../util/handleSettings';
import {logError} from '../../util/helpers';
import {getStyles} from './splashScreen.styles';

export const useSplashScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {appSettings, setAppSettings} = useContext(SettingsContext);

  const navigation = useNavigation<any>();

  const theme = useAppTheme();
  const styles = getStyles(theme);

  useEffect(() => {
    isFirstTime()
      .then(firstTime => {
        if (firstTime) {
          trackAction(analyticsTags.init.firstTime);
          trackAction(fetchInitScreenTag[Screen.Explainer]);
          navigation.replace(Screen.Explainer);
        } else {
          trackAction(analyticsTags.init.notFirstTime);
          Promise.all([IsOpenAIApiKeyPresent(), fetchAllSettings()])
            .then(([isOpenAIApiKeyPresent, currentSettings]) => {
              if (currentSettings) {
                setAppSettings(currentSettings);
              }
              if (!isOpenAIApiKeyPresent) {
                trackAction(analyticsTags.init.keyNotPresent);
                trackAction(fetchInitScreenTag[Screen.AskApiKey]);
                navigation.replace(Screen.AskApiKey);
              } else {
                trackAction(analyticsTags.init.keyPresent);
                trackAction(fetchInitScreenTag[Screen.Home]);
                navigation.replace(Screen.Home);
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
  }, [navigation, setAppSettings]);

  return {
    styles,
    theme,
  };
};
