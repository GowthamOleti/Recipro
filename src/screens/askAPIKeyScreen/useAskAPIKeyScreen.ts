import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {appLabels} from '../../../appLabels';
import {Screen} from '../../navigation/navigationTypes';
import {ExplainerScreenType} from '../../common/constants';
import {saveOpenAIApiKey} from '../../util/handleApiKey';
import {useToastMessage} from '../../common/useToastMessage';

export const useAskAPIKeyScreen = () => {
  const {askAPIKey} = appLabels;
  const [key, setKey] = useState('');
  const {showHomeScreenToast} = useToastMessage();

  const navigation = useNavigation<any>();

  const onGetInstructionsPress = () => {
    navigation.navigate(Screen.EXPLAINER, {type: ExplainerScreenType.API_KEY});
  };

  const onSaveButtonPress = () => {
    if (key.length !== 51 || !key.startsWith('sk-')) {
      // TODO: Update toast UI
      showHomeScreenToast(askAPIKey.errorMessage);
    } else {
      saveOpenAIApiKey(key).finally(() => {
        navigation.replace(Screen.HOME);
      });
    }
  };

  return {
    askAPIKey,
    key,
    onGetInstructionsPress,
    onSaveButtonPress,
    setKey,
  };
};
