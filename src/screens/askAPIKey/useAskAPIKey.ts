import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {appLabels} from '../../../appLabels';
import {saveOpenAIApiKey} from '../../util/handleApiKeys';
import {AskAPIKeyProps} from './askAPIKey';

export const useAskAPIKey = ({setAskAPIKey}: AskAPIKeyProps) => {
  const {askAPIKey} = appLabels;
  const [key, setKey] = useState('');

  const onDonePress = () => {
    if (key.length !== 51 || !key.startsWith('sk-')) {
      // TODO: Change this to a different type of toast
      ToastAndroid.show(askAPIKey.errorMessage, ToastAndroid.LONG);
    } else {
      saveOpenAIApiKey(key).finally(() => {
        setAskAPIKey(false);
      });
    }
  };

  return {
    askAPIKey,
    key,
    onDonePress,
    setKey,
  };
};
