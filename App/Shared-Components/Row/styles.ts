import {StyleSheet} from 'react-native';
import Colors from '../../Colors';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingVertical: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    color: Colors.white,
  },
  item: {
    fontSize: 20,
    color: Colors.white,
    paddingRight: 15,
  },
  showModalButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  modalContainer: {
    backgroundColor: Colors.ligthGray,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
    height: '70%',
  },
  title: {
    marginTop: 50,
    fontSize: 30,
  },
  buttons: {
    height: 80,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    gap: 10,
  },
  actionButtons: {
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
  modalMessage: {
    marginHorizontal: 10,
  },
  expression: {
    paddingTop: 5,
    textAlign: 'center',
  },
  inputExpression: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
});

export default styles;
