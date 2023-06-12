import React, {useContext} from 'react';
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
import {GlobalContext} from '../../../globalContext';

export const ResultActions = () => {
  const {contextData} = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => shareResult(contextData.output)}>
        <Share height={25} width={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => copyToClipboard(contextData.output)}
        style={styles.copy}>
        <Copy height={25} width={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsTweet(contextData.output)}
        style={styles.tweet}>
        <Tweet height={23} width={23} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => shareAsEmail(contextData.output)}
        style={styles.email}>
        <Email height={25} width={25} />
      </TouchableOpacity>
    </View>
  );
};
