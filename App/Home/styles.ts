import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434748',
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
    color: '#FFF',
  },
  result: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
});

export default styles;
