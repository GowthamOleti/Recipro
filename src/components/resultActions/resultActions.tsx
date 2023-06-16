import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Share from './../../../assets/icons/share.svg';
import Copy from './../../../assets/icons/copy.svg';
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
      <TouchableOpacity
        style={styles.margin}
        onPress={() => shareResult(output)}>
        <Share height={30} width={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsTweet(output)}
        style={styles.buttonContainer}>
        {/* <Tweet height={23} width={23} /> */}
        <Text style={styles.buttonText}>{'Tweet'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsEmail(output)}
        style={styles.buttonContainer}>
        {/* <Email height={25} width={25} /> */}
        <Text style={styles.buttonText}>{'Email'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => copyToClipboard(output)}
        style={styles.copy}>
        <Copy height={35} width={35} />
      </TouchableOpacity>
    </View>
  );
};
