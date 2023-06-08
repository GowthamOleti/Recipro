import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    paddingHorizontal: '7%',
  },
  inputText: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '700',
  },
  resultContainer: {
    borderColor: 'white',
    marginTop: '10%',
    backgroundColor: '#252924',
    borderRadius: 27,
    paddingVertical: 10,
  },
  resultActions: {
    justifyContent: 'flex-end',
  },
  resultTitleText: {
    color: '#FFFFFF99',
    fontFamily: 'Avenir',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  resultText: {
    color: 'white',
    fontFamily: 'Avenir',
    padding: 15,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
  },
  inputTextTitle: {
    color: '#FFFFFF99',
    fontFamily: 'Avenir',
    fontSize: 20,
    marginVertical: '2%',
    fontWeight: '800',
  },
  copyIcon: {
    bottom: -30,
  },
});
