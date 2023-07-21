import {Linking, Platform, Share} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {appVersion} from '../common/constants';
import {analyticsTags, trackAction} from './analytics';

export const isAndroid = Platform.OS === 'android';

export const shareResult = async (text: string) => {
  trackAction(analyticsTags.resultScreen.actions.share);
  try {
    const result = await Share.share({
      message: text,
    });
    if (result.action === Share.sharedAction) {
      trackAction(analyticsTags.resultScreen.actions.shared);
    } else if (result.action === Share.dismissedAction) {
      trackAction(analyticsTags.resultScreen.actions.shareDismissed);
    }
  } catch (error) {
    console.error('Error sharing text:', error);
  }
};

export const shareAsTweet = (text: string) => {
  trackAction(analyticsTags.resultScreen.actions.tweet);
  Linking.openURL(`twitter://post?text=${encodeURIComponent(text)}`);
};

export const shareAsEmail = (text: string) => {
  trackAction(analyticsTags.resultScreen.actions.email);
  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    '',
  )}&body=${encodeURIComponent(text)}`;

  Linking.openURL(mailtoUrl).catch(err =>
    console.error('An error occurred', err),
  );
};

export const copyToClipboard = (text: string) => {
  trackAction(analyticsTags.resultScreen.actions.copy);
  Clipboard.setString(text);
};

export const onFeedbackPress = () => {
  const recipient = 'textcraft.app@gmail.com';
  const subject = 'TextCraft App Feedback';
  const body = `OS: ${Platform.OS}${isAndroid ? ' API Level' : ''} ${
    Platform.Version
  }\nApp Version: ${appVersion}\nDevice Name:`;
  Linking.openURL(`mailto:${recipient}?subject=${subject}&body=${body}`);
};

export const isLink = (text: string): boolean => {
  const linkRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return linkRegex.test(text);
};

export const isLinkSupported = (link: string) => {
  const pdfRegex = /\.pdf$/i;
  const youTubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.*$/i; // match YouTube domain
  return !pdfRegex.test(link) && !youTubeRegex.test(link);
};
