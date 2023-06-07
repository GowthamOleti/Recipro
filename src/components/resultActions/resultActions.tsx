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

export interface Props {
  result: string;
}

export const ResultActions = ({result}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => shareResult(result)}>
        <Share height={25} width={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => copyToClipboard(result)}
        style={styles.copy}>
        <Copy height={25} width={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsTweet(result)}
        style={styles.tweet}>
        <Tweet height={23} width={23} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsEmail(result)}
        style={styles.email}>
        <Email height={25} width={25} />
      </TouchableOpacity>
    </View>
  );
};
