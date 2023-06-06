import {StyleSheet} from 'react-native';

export const readEditStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greyBackground: {
    backgroundColor: '#252924',
  },
  blackBackground: {
    backgroundColor: 'black',
  },
  actionsContainer: {
    flexDirection: 'row',
    padding: '5%',
  },
  buttonContainer: {
    borderRadius: 25,
    width: '25%',
    borderColor: 'white',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
  },
});
