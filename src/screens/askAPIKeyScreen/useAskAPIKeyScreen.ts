import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {appLabels} from '../../../appLabels';
import {Screen} from '../../navigation/navigationTypes';
import {ExplainerScreenType} from '../../common/constants';
import {useToastMessage} from '../../common/useToastMessage';
import {isFirstTime} from '../../util/handleSettings';
import {isKeyWorking} from '../../util/fetchGPTResult';
import {saveOpenAIApiKey} from '../../util/handleApiKey';
import Clipboard from '@react-native-community/clipboard';
import {analyticsTags, trackAction, trackState} from '../../util/analytics';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './askApiKeyScreen.styles';
import {Linking} from 'react-native';
import {logError} from '../../util/helpers';

export const useAskApiKeyScreen = () => {
  const {askAPIKey, toast} = appLabels;
  const {showToast} = useToastMessage();
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const [key, setKey] = useState('');
  const [firstTime, setFirstTime] = useState<boolean>();
  const [keyError, setKeyError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<any>();

  useEffect(() => {
    trackState(analyticsTags.screens.askApiKey);
    isFirstTime()
      .then(value => setFirstTime(value))
      .catch(error => {
        logError(error);
      });
  }, []);

  const onButtonPress = async () => {
    if (key.trim().length !== 51 || !key.trim().startsWith('sk-')) {
      trackAction(analyticsTags.errorToast.invalidKey);
      showToast({message: toast.errors.invalidApiKey, type: 'error'});
    } else {
      if (firstTime) {
        trackAction(analyticsTags.onboarding.apiKeyNext);
        navigation.push(Screen.Explainer, {
          type: ExplainerScreenType.AddPayment,
          key,
        });
      } else {
        trackAction(analyticsTags.askApiKeyScreen.saveAPIKey);
        setIsLoading(true);
        const keyWorking = await isKeyWorking(key);
        if (keyWorking) {
          trackAction(analyticsTags.askApiKeyScreen.apiKeyTestSuccess);
          await saveOpenAIApiKey(key);
          Clipboard.setString('');
          navigation.replace(Screen.Home);
        } else {
          trackAction(analyticsTags.askApiKeyScreen.apiKeyTestFailure);
          setKeyError(true);
        }
        setIsLoading(false);
      }
    }
  };

  const onApiKeyLinkPress = () => {
    trackAction(
      firstTime
        ? analyticsTags.onboarding.apiKeyLink
        : analyticsTags.askApiKeyScreen.apiKeyLink,
    );
    Linking.openURL(askAPIKey.generateKeyLink);
  };

  const onAlertPrimaryButtonPress = () => {
    trackAction(analyticsTags.askApiKeyScreen.apiKeyErrorInstructionsBtn);
    setKeyError(false);
    navigation.navigate(Screen.Explainer, {
      type: ExplainerScreenType.KeyInstructions,
    });
  };

  return {
    askAPIKey,
    firstTime,
    isLoading,
    key,
    keyError,
    onAlertPrimaryButtonPress,
    onApiKeyLinkPress,
    onButtonPress,
    setKey,
    setKeyError,
    styles,
    theme,
  };
};
