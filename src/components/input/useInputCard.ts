import {useClipboard} from '@react-native-community/clipboard';
import {useFetchSharedItem} from '../../util/useFetchSharedItem';
import {isLink} from '../../util/helpers';
import {InputActionType} from '../../util/constants';
import {Screen} from '../../navigation/navigationTypes';
import {useEffect, useState} from 'react';
import {InputCardProps} from './inputCard';
import {useNavigation} from '@react-navigation/native';

export const useInputCard = ({inputText, setInputText}: InputCardProps) => {
  const [showPasteButton, setShowPasteButton] = useState(false);

  const [clipboardText] = useClipboard();
  const sharedText = useFetchSharedItem();

  const navigation = useNavigation<any>();

  useEffect(() => {
    if (sharedText) {
      if (isLink(sharedText)) {
        navigation.navigate(Screen.RESULT, {
          actionType: InputActionType.Summarize,
          input: sharedText,
        });
      }
      setInputText(sharedText);
    }
  }, [navigation, setInputText, sharedText]);

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
  };
};
