import {useClipboard} from '@react-native-community/clipboard';
import {useFetchSharedItem} from '../../../../util/useFetchSharedItem';
import {isLink, isLinkSupported} from '../../../../util/helpers';
import {InputActionType} from '../../../../common/constants';
import {Screen, StackNavigation} from '../../../../navigation/navigationTypes';
import {useContext, useEffect, useState} from 'react';
import {InputCardProps} from './inputCard';
import {useNavigation} from '@react-navigation/native';
import {SettingsContext} from '../../../../common/settingsContext';
import {useToastMessage} from '../../../../common/useToastMessage';

export const useInputCard = ({inputText, setInputText}: InputCardProps) => {
  const [showPasteButton, setShowPasteButton] = useState(false);
  const {appSettings} = useContext(SettingsContext);

  const [clipboardText] = useClipboard();
  const sharedText = useFetchSharedItem();
  const {showToast} = useToastMessage();

  const navigation = useNavigation<StackNavigation>();

  useEffect(() => {
    if (sharedText) {
      if (
        appSettings.quickSummarize &&
        isLink(sharedText) &&
        isLinkSupported(sharedText)
      ) {
        navigation.navigate(Screen.RESULT, {
          actionType: InputActionType.Summarize,
          input: sharedText,
        });
      }
      setInputText(sharedText);
    }
  }, [appSettings.quickSummarize, navigation, setInputText, sharedText]);

  useEffect(() => {
    if (clipboardText.length > 0 && inputText.length === 0) {
      setShowPasteButton(true);
    } else {
      setShowPasteButton(false);
    }
  }, [clipboardText, inputText.length]);

  return {
    clipboardText,
    showPasteButton,
    setShowPasteButton,
    showToast,
  };
};
