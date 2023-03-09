import {StyleSheet} from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ligthGray,
  },
  header: {
    height: '25%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 10,
  },
  keyboardContainer: {
    height: '75%',
    width: '100%',
  },
  text: {
    fontSize: 25,
    color: Colors.white,
  },
  result: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  resultContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  bigButtonStyle: {
    width: '45%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.violet,
  },
});

export default styles;
