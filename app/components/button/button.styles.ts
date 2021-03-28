import {StyleSheet} from 'react-native';
export const buttonStyles = StyleSheet.create({
  shadowContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  touchableContainer: {
    flex: 1,
    backgroundColor: '#88bdd8',
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
  disabled: {
    opacity: 0.6,
  },
});
