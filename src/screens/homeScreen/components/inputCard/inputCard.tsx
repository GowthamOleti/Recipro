import React from 'react';
import {TextInput, View} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {HomeIllustration} from '../homeIllustration';
import {Clear, Paste} from '../../../../../assets/icons';
import {useInputCard} from './useInputCard';
import {getStyles} from './inputCard.styles';
import {useAppTheme} from '../../../../common/useAppTheme';
import Animated, {FadeInDown, ZoomIn} from 'react-native-reanimated';

export interface InputCardProps {
  inputText: string;
  setInputText: (text: string) => void;
}

export const InputCard = ({inputText, setInputText}: InputCardProps) => {
  const {clipboardText, showPasteButton, setShowPasteButton, showToast} =
    useInputCard({
      inputText,
      setInputText,
    });
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown.duration(500)}>
        <TextInput
          multiline
          autoFocus
          placeholder={appLabels.inputHint}
          placeholderTextColor={theme.colors.common.placeHolderText}
          style={styles.inputText}
          onChangeText={text => setInputText(text)}
          value={inputText}
        />
      </Animated.View>
      {inputText.length === 0 && <HomeIllustration />}
      <View style={styles.clearAndPaste}>
        {inputText.length > 0 && (
          <Clear height={25} width={25} onPress={() => setInputText('')} />
        )}
        {showPasteButton && (
          <Animated.View entering={ZoomIn.duration(500)}>
            <Paste
              height={26}
              width={26}
              onPress={() => {
                showToast({message: appLabels.toast.info.paste, type: 'info'});
                setInputText(clipboardText);
                setShowPasteButton(false);
              }}
              fill={theme.colors.common.homeSvg}
            />
          </Animated.View>
        )}
      </View>
    </View>
  );
};
