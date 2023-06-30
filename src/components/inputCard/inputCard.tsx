import React from 'react';
import {TextInput, View} from 'react-native';
import {appLabels} from '../../../appLabels';
import {HomeIllustration} from '../homeIllustration';
import {Clear, Paste} from '../../../assets/icons';
import {useInputCard} from './useInputCard';
import {getStyles} from './inputCard.style';
import {useAppTheme} from '../../util/useAppTheme';

export interface InputCardProps {
  inputText: string;
  setInputText: (text: string) => void;
}

export const InputCard = ({inputText, setInputText}: InputCardProps) => {
  const {clipboardText, showPasteButton, setShowPasteButton} = useInputCard({
    inputText,
    setInputText,
  });
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        autoFocus
        placeholder={appLabels.inputHint}
        placeholderTextColor={theme.colors.common.placeHolderText}
        style={styles.inputText}
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
      {inputText.length === 0 && <HomeIllustration />}
      <View style={styles.clearAndPaste}>
        {inputText.length > 0 && (
          <Clear height={25} width={25} onPress={() => setInputText('')} />
        )}
        {showPasteButton && (
          <Paste
            height={26}
            width={26}
            onPress={() => {
              setInputText(clipboardText);
              setShowPasteButton(false);
            }}
            fill={theme.colors.common.homeSvg}
          />
        )}
      </View>
    </View>
  );
};
