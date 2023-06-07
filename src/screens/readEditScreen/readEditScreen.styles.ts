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
  resultText: {
    color: 'white',
    padding: 15,
    fontSize: 18,
  },
  editableText: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
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
