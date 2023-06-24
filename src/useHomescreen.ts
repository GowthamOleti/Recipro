import {useClipboard} from '@react-native-community/clipboard';
import {useEffect, useState} from 'react';
import {Screen} from './navigation/navigationTypes';
import {InputActionType} from './util/constants';
import {IsOpenAIApiKeyPresent} from './util/handleApiKeys';
import {isLink} from './util/helpers';
import {useFetchSharedItem} from './util/useFetchSharedItem';

interface Props {
  navigation: any; // TODO: Remove
}

export const useHomescreen = ({navigation}: Props) => {
  const sharedText = useFetchSharedItem();

  const [askApiKey, setAskApiKey] = useState(false);
  const [inputText, setInputText] = useState('');

  const [clipboardText] = useClipboard();
  const [showPasteButton, setShowPasteButton] = useState(false);

  useEffect(() => {
    if (clipboardText.length > 0 && inputText.length === 0) {
      setShowPasteButton(true);
    } else {
      setShowPasteButton(false);
    }
  }, [clipboardText, inputText]);

  useEffect(() => {
    IsOpenAIApiKeyPresent().then(isOpenAIApiKeyPresent => {
      if (!isOpenAIApiKeyPresent) {
        setAskApiKey(true);
      }
    });
  }, []);

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
  }, [navigation, sharedText]);
  return {
    askApiKey,
    clipboardText,
    setAskApiKey,
    showPasteButton,
    inputText,
    setInputText,
    setShowPasteButton,
  };
};
