import {Linking, Share} from 'react-native';

// Share Result
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

// Share Result as Tweet
export const shareAsTweet = (text: string) => {
  Linking.openURL(`twitter://post?text=${encodeURIComponent(text)}`);
};

// Share Result as Email
export const shareAsEmail = (text: string) => {
  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    '',
  )}&body=${encodeURIComponent(text)}`;

  Linking.openURL(mailtoUrl).catch(err =>
    console.error('An error occurred', err),
  );
};

// export const copyToClipboard = (text: string) => {
//   Clipboard.setString(text);
//   console.log(Clipboard.getString());
// };
