import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',
  },
  actionButtonContainer: {
    borderRadius: 25,
    width: '45%',
    borderColor: 'white',
    borderWidth: 2,
  },
  actionButtonText: {
    color: 'white',
    padding: 10,
    alignSelf: 'center',
  },
});
