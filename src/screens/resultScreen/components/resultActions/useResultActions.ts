import {useContext} from 'react';
import {Linking} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {SettingsContext} from '../../../../common/settingsContext';
import {useToastMessage} from '../../../../common/useToastMessage';
import {analyticsTags, trackAction} from '../../../../util/analytics';
import {shareAsTweet} from '../../../../util/helpers';

export const useResultActions = () => {
  const {appSettings} = useContext(SettingsContext);
  const {showToast} = useToastMessage();

  const onTweetPress = (output: string) => {
    trackAction(analyticsTags.resultScreen.actions.tweet);
    Linking.canOpenURL(`twitter://post?text=${encodeURIComponent('')}`).then(
      twitterInstalled => {
        if (!twitterInstalled) {
          trackAction(analyticsTags.errorToast.twitterNotInstalled);
          showToast({
            message: appLabels.toast.errors.twitterNotInstalled,
            type: 'error',
          });
        } else {
          shareAsTweet(output);
        }
      },
    );
  };
  return {
    appSettings,
    onTweetPress,
  };
};
