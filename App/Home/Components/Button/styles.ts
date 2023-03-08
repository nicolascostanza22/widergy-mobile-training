import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonBase: {
    borderRadius: 50,
    width: '20%',
    height: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#393A3E',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    elevation: 4,
    marginHorizontal: 5,
    margin: 15,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
  },
});

export default styles;
