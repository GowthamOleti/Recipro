import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Copy, Email, Share, Twitter} from '../../../../../assets/icons';
import {useResultActions} from './useResultActions';

export interface ResultActionsProps {
  output: string;
}

export const ResultActions = ({output}: ResultActionsProps) => {
  const {
    showTweetEmail,
    onCopyPress,
    onEmailPress,
    onSharePress,
    onTweetPress,
    styles,
    theme,
  } = useResultActions({output});

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.shareCopyContainer}
        onPress={onSharePress}>
        <Share
          style={styles.shareCopy}
          height={20}
          width={20}
          fill={theme.colors.resultSvg}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onCopyPress} style={styles.shareCopyContainer}>
        <Copy
          style={styles.shareCopy}
          height={23}
          width={23}
          fill={theme.colors.resultSvg}
        />
      </TouchableOpacity>
      {showTweetEmail && (
        <TouchableOpacity onPress={onTweetPress} style={styles.tweetContainer}>
          <Twitter style={styles.tweetEmail} height={23} width={23} />
        </TouchableOpacity>
      )}
      {showTweetEmail && (
        <TouchableOpacity onPress={onEmailPress} style={styles.emailContainer}>
          <Email style={styles.tweetEmail} height={25} width={25} />
        </TouchableOpacity>
      )}
    </View>
  );
};
