import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {appLabels} from '../../../appLabels';
import {Screen} from '../../navigation/navigationTypes';
import {ExplainerScreenType} from '../../common/constants';
import {saveOpenAIApiKey} from '../../util/handleApiKey';
import {useToastMessage} from '../../common/useToastMessage';
import {isFirstTime} from '../../util/handleSettings';

export const useAskAPIKeyScreen = () => {
  const {askAPIKey, errors} = appLabels;
  const [key, setKey] = useState('');
  const {showErrorToast} = useToastMessage();

  const navigation = useNavigation<any>();

  const onGetInstructionsPress = () => {
    navigation.navigate(Screen.EXPLAINER, {type: ExplainerScreenType.API_KEY});
  };

  const onSaveButtonPress = () => {
    if (key.length !== 51 || !key.startsWith('sk-')) {
      showErrorToast(errors.invalidApiKey);
    } else {
      Promise.all([saveOpenAIApiKey(key), isFirstTime()])
        .then(([_, firstTime]) => {
          if (firstTime) {
            navigation.replace(Screen.EXPLAINER, {
              type: ExplainerScreenType.GENERAL,
            });
          } else {
            navigation.replace(Screen.HOME);
          }
        })
        .catch(error => {
          console.log(error);
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
