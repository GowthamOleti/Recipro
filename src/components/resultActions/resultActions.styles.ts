import {StyleSheet} from 'react-native';
import {color} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  shareCopyContainer: {
    borderWidth: 1,
    borderColor: color.lightMode.buttonBorder,
    borderRadius: 25,
    justifyContent: 'center',
  },
  shareCopy: {
    alignSelf: 'center',
    paddingHorizontal: '12%',
    paddingVertical: '25%',
  },
  tweetContainer: {
    borderWidth: 1,
    borderColor: color.lightMode.tweetBorder,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: color.lightMode.tweetBackground,
  },
  emailContainer: {
    borderWidth: 1,
    borderColor: color.lightMode.emailBorder,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: color.lightMode.emailBackground,
  },
  tweetEmail: {
    alignSelf: 'center',
    paddingHorizontal: '6%',
    color: '#B0B2B3',
  },
});
