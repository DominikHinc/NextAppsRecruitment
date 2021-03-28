import {StyleSheet} from 'react-native';

export const counterScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 20,
    color: '#AAA',
  },
  counterContainer: {
    width: '80%',
    height: '60%',
    backgroundColor: '#FFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    textAlignVertical: 'center',
    fontSize: 36,
    fontWeight: '500',
    padding: 30,
  },
  buttonContainer: {
    minHeight: '5%',
    width: '70%',
    marginVertical: 10,
  },
});
