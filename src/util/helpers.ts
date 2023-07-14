import {Dimensions, Linking, Share} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

export const shareResult = async (text: string) => {
  try {
    const result = await Share.share({
      message: text,
    });
    if (result.action === Share.sharedAction) {
      console.log('Text shared successfully');
    } else if (result.action === Share.dismissedAction) {
      console.log('Sharing dismissed');
    }
  } catch (error) {
    console.error('Error sharing text:', error);
  }
};

export const shareAsTweet = (text: string) => {
  Linking.openURL(`twitter://post?text=${encodeURIComponent(text)}`);
};

export const shareAsEmail = (text: string) => {
  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    '',
  )}&body=${encodeURIComponent(text)}`;

  Linking.openURL(mailtoUrl).catch(err =>
    console.error('An error occurred', err),
  );
};

export const copyToClipboard = (text: string) => {
  Clipboard.setString(text);
};

export const onFeedbackPress = () => {
  Linking.openURL('mailto:textcraft.app@gmail.com');
};

export const isLink = (text: string): boolean => {
  const linkRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return linkRegex.test(text);
};

export const screenDimensions = Dimensions.get('screen');

export const isLinkSupported = (link: string) => {
  const pdfRegex = /\.pdf$/i;
  const youTubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.*$/i; // match YouTube domain
  return !pdfRegex.test(link) && !youTubeRegex.test(link);
};
