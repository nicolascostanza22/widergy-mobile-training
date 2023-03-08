import {StyleSheet} from 'react-native';
import Colors from '../../Colors';

const styles = StyleSheet.create({
  KeyboardContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ligthGray,
    marginBottom: 20,
    width: '100%',
  },
});

export default styles;
