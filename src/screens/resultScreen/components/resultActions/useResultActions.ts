import {useContext} from 'react';
import {Linking} from 'react-native';
import {SettingsContext} from '../../../../common/settingsContext';
import {useToastMessage} from '../../../../common/useToastMessage';
import {shareAsTweet} from '../../../../util/helpers';

export const useResultActions = () => {
  const {appSettings} = useContext(SettingsContext);
  const {showResultScreenToast} = useToastMessage();

  const onTweetPress = (output: string) => {
    Linking.canOpenURL(`twitter://post?text=${encodeURIComponent('')}`).then(
      twitterInstalled => {
        if (!twitterInstalled) {
          showResultScreenToast();
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
