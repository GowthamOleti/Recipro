import {useState} from 'react';
import {appLabels} from '../../../appLabels';
import {saveOpenAIApiKey} from '../../util/handleApiKeys';
import {useToastMessage} from '../../util/useToastMessage';
import {AskAPIKeyProps} from './askAPIKey';

export const useAskAPIKey = ({setAskAPIKey}: AskAPIKeyProps) => {
  const {askAPIKey} = appLabels;
  const [key, setKey] = useState('');

  const {showHomeScreenToast} = useToastMessage();

  const onDonePress = () => {
    if (key.length !== 51 || !key.startsWith('sk-')) {
      // TODO: Update toast UI
      showHomeScreenToast(askAPIKey.errorMessage);
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
