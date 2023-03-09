import {StyleSheet} from 'react-native';
import Colors from '../../Colors';

const styles = StyleSheet.create({
  buttonBase: {
    borderRadius: 50,
    width: '20%',
    height: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkGray,
    shadowColor: Colors.white,
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
    color: Colors.white,
  },
});

export default styles;
