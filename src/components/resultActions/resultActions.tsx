import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appLabels} from '../../../labels';
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
  const {commonLabels} = appLabels;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.resultActionButtonContainer}
        onPress={() => shareResult(result)}>
        <Text style={styles.resultActionButtonText}>
          {commonLabels.resultAction.share}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resultActionButtonContainer}
        onPress={() => {
          copyToClipboard(result);
        }}>
        <Text style={styles.resultActionButtonText}>
          {commonLabels.resultAction.copy}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resultActionButtonContainer}
        onPress={() => shareAsTweet(result)}>
        <Text style={styles.resultActionButtonText}>
          {commonLabels.resultAction.tweet}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resultActionButtonContainer}
        onPress={() => shareAsEmail(result)}>
        <Text style={styles.resultActionButtonText}>
          {commonLabels.resultAction.email}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
