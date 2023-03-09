import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Row from '../../Shared-Components/Row/index';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteAllExpressions,
  getExpressions,
} from '../../Redux/Calculator/actions';
import {handleDelete, handleEdit} from './utils';

interface Props {
  navigation: any;
}

const HistoryRoutes = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const expressions = useSelector((state: any) => state.calculator.expressions);

  useEffect(() => {
    dispatch(getExpressions());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          dispatch(deleteAllExpressions());
        }}>
        <Text style={styles.textGoBack}>Borrar Todo</Text>
      </TouchableOpacity>
      <FlatList
        data={expressions || []}
        renderItem={({item, index}) => (
          <Row
            key={index}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            expression={item}
          />
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.textGoBack}>Calculadora</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryRoutes;
