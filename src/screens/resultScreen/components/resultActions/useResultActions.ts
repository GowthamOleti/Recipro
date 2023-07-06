import {useContext} from 'react';
import {Linking} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {SettingsContext} from '../../../../common/settingsContext';
import {useToastMessage} from '../../../../common/useToastMessage';
import {shareAsTweet} from '../../../../util/helpers';

export const useResultActions = () => {
  const {appSettings} = useContext(SettingsContext);
  const {showErrorToast} = useToastMessage();

  const onTweetPress = (output: string) => {
    Linking.canOpenURL(`twitter://post?text=${encodeURIComponent('')}`).then(
      twitterInstalled => {
        if (!twitterInstalled) {
          showErrorToast(appLabels.errors.twitterNotInstalled);
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
