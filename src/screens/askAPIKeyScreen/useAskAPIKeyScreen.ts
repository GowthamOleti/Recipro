import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {appLabels} from '../../../appLabels';
import {Screen} from '../../navigation/navigationTypes';
import {saveOpenAIApiKey} from '../../util/handleApiKeys';
import {useToastMessage} from '../../util/useToastMessage';

export const useAskAPIKeyScreen = () => {
  const {askAPIKey} = appLabels;
  const [key, setKey] = useState('');

  const {showHomeScreenToast} = useToastMessage();
  const navigation = useNavigation<any>();

  const onSaveButtonPress = () => {
    if (key.length !== 51 || !key.startsWith('sk-')) {
      // TODO: Update toast UI
      showHomeScreenToast(askAPIKey.errorMessage);
    } else {
      saveOpenAIApiKey(key).finally(() => {
        // TODO: Navigate to Home
        navigation.replace(Screen.HOME);
      });
    }
  };

  return {
    askAPIKey,
    key,
    onSaveButtonPress,
    setKey,
  };
};
