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

export const useAskAPIKeyScreen = () => {
  const {askAPIKey, toast} = appLabels;
  const [key, setKey] = useState('');
  const [firstTime, setFirstTime] = useState<boolean>();
  const [keyError, setKeyError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {showToast} = useToastMessage();

  const navigation = useNavigation<any>();

  useEffect(() => {
    isFirstTime().then(value => setFirstTime(value));
  }, []);

  const onButtonPress = async () => {
    if (key.trim().length !== 51 || !key.trim().startsWith('sk-')) {
      showToast({message: toast.errors.invalidApiKey, type: 'error'});
    } else {
      if (firstTime) {
        navigation.push(Screen.EXPLAINER, {
          type: ExplainerScreenType.ADD_PAYMENT,
          key,
        });
      } else {
        setIsLoading(true);
        const keyWorking = await isKeyWorking(key);
        if (keyWorking) {
          await saveOpenAIApiKey(key);
          Clipboard.setString('');
          navigation.replace(Screen.HOME);
        } else {
          setKeyError(true);
        }
        setIsLoading(false);
      }
    }
  };

  return {
    askAPIKey,
    key,
    onButtonPress,
    setKey,
    firstTime,
    keyError,
    setKeyError,
    isLoading,
  };
};
