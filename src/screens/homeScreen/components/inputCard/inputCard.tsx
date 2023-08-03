import React from 'react';
import {TextInput, View} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {Clear, Paste} from '../../../../assets/icons';
import {useInputCard} from './useInputCard';
import Animated, {FadeInDown, ZoomIn} from 'react-native-reanimated';
import AnimatedLottieView from 'lottie-react-native';
import {Animations} from '../../../../assets/animations';

export interface InputCardProps {
  inputText: string;
  setInputText: (text: string) => void;
}

export const InputCard = ({inputText, setInputText}: InputCardProps) => {
  const {
    onClearButtonPress,
    onPasteButtonPress,
    showPasteButton,
    styles,
    theme,
  } = useInputCard({
    inputText,
    setInputText,
  });

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown.duration(500)}>
        <TextInput
          multiline
          autoFocus
          placeholder={appLabels.inputHint}
          placeholderTextColor={theme.colors.placeHolderText}
          style={styles.inputText}
          onChangeText={text => setInputText(text)}
          value={inputText}
        />
      </Animated.View>
      {inputText.length === 0 && (
        <AnimatedLottieView
          style={styles.illustration}
          source={Animations.Home}
          autoPlay
          loop={false}
        />
      )}
      <View style={styles.clearAndPaste}>
        {inputText.length > 0 && (
          <Clear height={25} width={25} onPress={onClearButtonPress} />
        )}
        {showPasteButton && (
          <Animated.View entering={ZoomIn.duration(500)}>
            <Paste
              height={26}
              width={26}
              onPress={onPasteButtonPress}
              fill={theme.colors.common.homeSvg}
            />
          </Animated.View>
        )}
      </View>
    </View>
  );
};
