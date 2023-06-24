import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  copyToClipboard,
  shareAsEmail,
  shareAsTweet,
  shareResult,
} from '../../util/helpers';
import {styles} from './resultActions.styles';
import {color} from '../../util/theme';
import {Copy, Email, Share, Twitter} from '../../../assets/icons';

interface Props {
  output: string;
}

export const ResultActions = ({output}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.shareCopyContainer}
        onPress={() => shareResult(output)}>
        <Share
          style={styles.shareCopy}
          height={20}
          width={20}
          fill={color.lightMode.resultSvg}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => copyToClipboard(output)}
        style={styles.shareCopyContainer}>
        <Copy
          style={styles.shareCopy}
          height={23}
          width={23}
          fill={color.lightMode.resultSvg}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsTweet(output)}
        style={styles.tweetContainer}>
        <Twitter style={styles.tweetEmail} height={23} width={23} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsEmail(output)}
        style={styles.emailContainer}>
        <Email style={styles.tweetEmail} height={25} width={25} />
      </TouchableOpacity>
    </View>
  );
};
