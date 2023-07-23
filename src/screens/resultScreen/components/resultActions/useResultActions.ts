import {useContext} from 'react';
import {Linking} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {SettingsContext} from '../../../../common/settingsContext';
import {useAppTheme} from '../../../../common/useAppTheme';
import {useToastMessage} from '../../../../common/useToastMessage';
import {analyticsTags, trackAction} from '../../../../util/analytics';
import {
  copyToClipboard,
  logError,
  shareAsEmail,
  shareAsTweet,
  shareResult,
} from '../../../../util/helpers';
import {ResultActionsProps} from './resultActions';
import {getStyles} from './resultActions.styles';

export const useResultActions = ({output}: ResultActionsProps) => {
  const {appSettings} = useContext(SettingsContext);
  const {showToast} = useToastMessage();

  const theme = useAppTheme();
  const styles = getStyles(theme);

  const onTweetPress = () => {
    trackAction(analyticsTags.resultScreen.actions.tweet);
    Linking.canOpenURL(`twitter://post?text=${encodeURIComponent('')}`)
      .then(twitterInstalled => {
        if (!twitterInstalled) {
          trackAction(analyticsTags.errorToast.twitterNotInstalled);
          showToast({
            message: appLabels.toast.errors.twitterNotInstalled,
            type: 'error',
          });
        } else {
          shareAsTweet(output);
        }
      })
      .catch(error => {
        logError(error);
      });
  };

  const onSharePress = () => {
    trackAction(analyticsTags.resultScreen.actions.share);
    shareResult(output);
  };

  const onCopyPress = () => {
    trackAction(analyticsTags.resultScreen.actions.copy);
    showToast({message: appLabels.toast.info.copy, type: 'info'});
    copyToClipboard(output);
  };

  const onEmailPress = () => {
    trackAction(analyticsTags.resultScreen.actions.email);
    shareAsEmail(output);
  };

  return {
    showTweetEmail: appSettings.showTweetEmail,
    onCopyPress,
    onEmailPress,
    onSharePress,
    onTweetPress,
    styles,
    theme,
  };
};
