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
        style={styles.buttonContainer}
        onPress={() => shareResult(output)}>
        <Share height={26} width={26} fill={color.lightGrey} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => copyToClipboard(output)}
        style={styles.buttonContainer}>
        <Copy height={30} width={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsTweet(output)}
        style={styles.buttonContainer}>
        <Tweet height={30} width={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsEmail(output)}
        style={styles.buttonContainer}>
        <Email height={31} width={31} />
      </TouchableOpacity>
    </View>
  );
};
