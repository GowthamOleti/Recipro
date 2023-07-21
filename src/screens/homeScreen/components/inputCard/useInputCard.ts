import Clipboard from '@react-native-community/clipboard';
import {useFetchSharedItem} from '../../../../util/useFetchSharedItem';
import {isLink, isLinkSupported} from '../../../../util/helpers';
import {InputActionType} from '../../../../common/constants';
import {Screen, StackNavigation} from '../../../../navigation/navigationTypes';
import {useContext, useEffect, useState} from 'react';
import {InputCardProps} from './inputCard';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {SettingsContext} from '../../../../common/settingsContext';
import {useToastMessage} from '../../../../common/useToastMessage';
import {AppState} from 'react-native';
import {analyticsTags, trackAction} from '../../../../util/analytics';

export const useInputCard = ({inputText, setInputText}: InputCardProps) => {
  const [showPasteButton, setShowPasteButton] = useState(false);
  const [clipboardText, setClipboardText] = useState('');
  const {appSettings} = useContext(SettingsContext);

  const sharedText = useFetchSharedItem();
  const {showToast} = useToastMessage();

  const navigation = useNavigation<StackNavigation>();
  const isFocused = useIsFocused();

  const getClipboardText = () => {
    Clipboard.getString().then(value => setClipboardText(value));
  };

  AppState.addEventListener('change', nextAppState => {
    if (nextAppState === 'active') {
      getClipboardText();
    }
  });

  useEffect(() => {
    if (isFocused) {
      getClipboardText();
    }
  }, [isFocused]);

  useEffect(() => {
    if (sharedText) {
      if (
        appSettings.quickSummarize &&
        isLink(sharedText) &&
        isLinkSupported(sharedText)
      ) {
        trackAction(analyticsTags.homescreen.autoSummarizing);
        navigation.navigate(Screen.RESULT, {
          actionType: InputActionType.Summarize,
          input: sharedText,
        });
      }
      trackAction(analyticsTags.homescreen.sharedText);
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
