import {useContext, useState} from 'react';
import {Linking} from 'react-native';
import {SettingsContext} from '../../../../common/settingsContext';

export const useResultActions = () => {
  const {appSettings} = useContext(SettingsContext);

  const [showTwitter, setShowTwitter] = useState(true);
  Linking.canOpenURL(`twitter://post?text=${encodeURIComponent('')}`).then(
    isTwitterInstalled => {
      if (!isTwitterInstalled) {
        setShowTwitter(false);
      }
    },
  );
  return {
    appSettings,
    showTwitter,
  };
};
