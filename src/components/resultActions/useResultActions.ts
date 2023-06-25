import {useState} from 'react';
import {Linking} from 'react-native';

export const useResultActions = () => {
  const [showTwitter, setShowTwitter] = useState(true);
  Linking.canOpenURL(`twitter://post?text=${encodeURIComponent('')}`).then(
    isTwitterInstalled => {
      if (!isTwitterInstalled) {
        setShowTwitter(false);
      }
    },
  );
  return {
    showTwitter,
  };
};
