import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {appLabels} from '../../../appLabels';
import {Screen} from '../../navigation/navigationTypes';
import {ExplainerScreenType} from '../../common/constants';
import {useToastMessage} from '../../common/useToastMessage';
import {isFirstTime} from '../../util/handleSettings';
import {isKeyWorking} from '../../util/fetchGPTResult';
import {saveOpenAIApiKey} from '../../util/handleApiKey';

export const useAskAPIKeyScreen = () => {
  const {askAPIKey, toast} = appLabels;
  const [key, setKey] = useState('');
  const [firstTime, setFirstTime] = useState<boolean>();
  const [showError, setShowError] = useState(false);
  const {showToast} = useToastMessage();

  const navigation = useNavigation<any>();

  useEffect(() => {
    isFirstTime().then(value => setFirstTime(value));
  }, []);

  const onButtonPress = async () => {
    if (key.length !== 51 || !key.startsWith('sk-')) {
      showToast({message: toast.errors.invalidApiKey, type: 'error'});
    } else {
      if (firstTime) {
        navigation.push(Screen.EXPLAINER, {
          type: ExplainerScreenType.ADD_PAYMENT,
          key,
        });
      } else {
        const isWorking = await isKeyWorking(key);
        if (isWorking) {
          await saveOpenAIApiKey(key);
          navigation.replace(Screen.HOME);
        } else {
          // TODO: Show popup
        }
      }
    }
  };

  return {
    askAPIKey,
    key,
    onButtonPress,
    setKey,
    firstTime,
    showError,
    setShowError,
  };
};
