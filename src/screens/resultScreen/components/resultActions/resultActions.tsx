import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  copyToClipboard,
  shareAsEmail,
  shareResult,
} from '../../../../util/helpers';
import {getStyles} from './resultActions.styles';
import {Copy, Email, Share, Twitter} from '../../../../../assets/icons';
import {useAppTheme} from '../../../../common/useAppTheme';
import {useResultActions} from './useResultActions';
import {useToastMessage} from '../../../../common/useToastMessage';
import {appLabels} from '../../../../../appLabels';
import {analyticsTags, trackAction} from '../../../../util/analytics';

interface Props {
  output: string;
}

export const ResultActions = ({output}: Props) => {
  const {appSettings, onTweetPress} = useResultActions();
  const {showToast} = useToastMessage();
  const theme = useAppTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.shareCopyContainer}
        onPress={() => {
          trackAction(analyticsTags.resultScreen.actions.share);
          shareResult(output);
        }}>
        <Share
          style={styles.shareCopy}
          height={20}
          width={20}
          fill={theme.colors.resultSvg}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          trackAction(analyticsTags.resultScreen.actions.copy);
          showToast({message: appLabels.toast.info.copy, type: 'info'});
          copyToClipboard(output);
        }}
        style={styles.shareCopyContainer}>
        <Copy
          style={styles.shareCopy}
          height={23}
          width={23}
          fill={theme.colors.resultSvg}
        />
      </TouchableOpacity>
      {appSettings.showTweetMail && (
        <TouchableOpacity
          onPress={() => onTweetPress(output)}
          style={styles.tweetContainer}>
          <Twitter style={styles.tweetEmail} height={23} width={23} />
        </TouchableOpacity>
      )}
      {appSettings.showTweetMail && (
        <TouchableOpacity
          onPress={() => {
            trackAction(analyticsTags.resultScreen.actions.email);
            shareAsEmail(output);
          }}
          style={styles.emailContainer}>
          <Email style={styles.tweetEmail} height={25} width={25} />
        </TouchableOpacity>
      )}
    </View>
  );
};
