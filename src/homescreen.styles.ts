import {StyleSheet} from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    paddingHorizontal: '10%',
  },
  inputText: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 18,
    lineHeight: 22,
  },
  resultContainer: {
    borderColor: 'white',
    marginTop: '10%',
    backgroundColor: '#252924',
    borderRadius: 27,
    maxHeight: '73%',
  },
  resultTitleText: {
    color: '#FFFFFF99',
    fontFamily: 'Avenir',
    fontSize: 20,
    marginTop: '2%',
    alignSelf: 'center',
    fontWeight: '800',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',
  },
  resultText: {
    color: 'white',
    fontFamily: 'Avenir',
    padding: 15,
    fontSize: 18,
    lineHeight: 23,
  },
  inputTextTitle: {
    color: '#FFFFFF99',
    fontFamily: 'Avenir',
    fontSize: 20,
    marginTop: '5%',
    fontWeight: '800',
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
