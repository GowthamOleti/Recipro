import {Linking, Platform, Share} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {appVersion} from '../common/constants';
import crashlytics from '@react-native-firebase/crashlytics';

export const isAndroid = Platform.OS === 'android';

export const shareResult = async (text: string) => {
  try {
    await Share.share({
      message: text,
    });
  } catch (error) {
    logError(error);
  }
};

export const shareAsTweet = (text: string) => {
  Linking.openURL(`twitter://post?text=${encodeURIComponent(text)}`);
};

export const shareAsEmail = (text: string) => {
  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    '',
  )}&body=${encodeURIComponent(text)}`;

  Linking.openURL(mailtoUrl).catch(error => logError(error));
};

export const copyToClipboard = (text: string) => {
  Clipboard.setString(text);
};

export const onFeedbackPress = () => {
  const recipient = 'oletigowtham8803@gmail.com';
  const subject = 'ReciPro AI App Feedback';
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
  const youTubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.*$/i;
  return !pdfRegex.test(link) && !youTubeRegex.test(link);
};

export const logError = (error: any) => {
  console.error(error);
  crashlytics().recordError(error);
};
