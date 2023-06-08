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
    marginTop: '2%',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
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
    fontWeight: '600',
  },
  inputTextTitle: {
    color: '#FFFFFF99',
    fontFamily: 'Avenir',
    fontSize: 20,
    marginVertical: '2%',
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
  copyIcon: {
    bottom: -30,
  },
});
