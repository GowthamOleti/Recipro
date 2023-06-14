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

interface Props {
  output: string;
}

export const ResultActions = ({output}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => shareResult(output)}>
        <Share height={25} width={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => copyToClipboard(output)}
        style={styles.copy}>
        <Copy height={25} width={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsTweet(output)}
        style={styles.tweet}>
        <Tweet height={23} width={23} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsEmail(output)}
        style={styles.email}>
        <Email height={25} width={25} />
      </TouchableOpacity>
    </View>
  );
};
