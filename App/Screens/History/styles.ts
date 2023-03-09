import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434748',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
    paddingVertical: 10,
  },
  backButton: {
    backgroundColor: '#966BDE',
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
    color: '#FFF',
    fontSize: 18,
  },
  tableContainer: {
    paddingVertical: 10,
  },
});

export default styles;
