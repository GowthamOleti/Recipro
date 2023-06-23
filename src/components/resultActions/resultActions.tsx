import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Share from './../../../assets/icons/share.svg';
import Copy from './../../../assets/icons/copy.svg';
import Tweet from './../../../assets/icons/twitter.svg';
import Email from './../../../assets/icons/email.svg';
import {
  copyToClipboard,
  shareAsEmail,
  shareAsTweet,
  shareResult,
} from '../../util/helpers';
import {styles} from './resultActions.styles';
import {color} from '../../util/theme';

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
          fill={color.lightMode.svg}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => copyToClipboard(output)}
        style={styles.shareCopyContainer}>
        <Copy
          style={styles.shareCopy}
          height={27}
          width={27}
          fill={color.lightMode.svg}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsTweet(output)}
        style={styles.tweetContainer}>
        <Tweet style={styles.tweetEmail} height={20} width={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsEmail(output)}
        style={styles.emailContainer}>
        <Email style={styles.tweetEmail} height={22} width={22} />
      </TouchableOpacity>
    </View>
  );
};
