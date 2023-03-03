import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Row from '../../components/Row';
import {
  deleteAllExpressions,
  deleteExpression,
  editExpression,
  getExpressions,
} from '../../Redux/Calculadora/actions';
import {CalculatorState, Expression} from '../../Redux/Calculadora/types';

interface Props {
  navigation: any;
  calculator: CalculatorState;
  dispatch: any;
}

const HistoryExpresssions = ({navigation, calculator, dispatch}: Props) => {
  useEffect(() => {
    dispatch(getExpressions());
  }, [dispatch]);

  const handleEdit = (data: Expression) => {
    dispatch(editExpression(data));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteExpression(id));
  };

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
        data={calculator.expressions || []}
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
});

export default HistoryExpresssions;
