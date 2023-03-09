import {StyleSheet} from 'react-native';
import Colors from '../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ligthGray,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: Colors.white,
    paddingVertical: 10,
  },
  backButton: {
    backgroundColor: Colors.violet,
    height: 40,
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    borderRadius: 50,
    marginBottom: 10,
  },
  textGoBack: {
    color: Colors.white,
    fontSize: 18,
  },
  tableContainer: {
    paddingVertical: 10,
  },
});

export default styles;
