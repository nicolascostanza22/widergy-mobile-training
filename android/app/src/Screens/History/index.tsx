import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Row from '../../components/Row';
import {CalculatorState} from '../../Redux/Calculadora/types';
import {
  deleteExpression,
  editExpression,
  getExpressions,
} from '../../Redux/Calculadora/thunks';

interface Props {
  navigation: any;
  calculator: CalculatorState;
  dispatch: any;
}

const HistoryExpresssions = ({navigation, calculator, dispatch}: Props) => {
  const [message, setMessage] = useState<string>('');

  console.log('calculator history', calculator);

  useEffect(() => {
    dispatch(getExpressions());
  }, [dispatch]);

  const handleEdit = async (id: string, data: string) => {
    try {
      await dispatch(editExpression(id, data));
      setMessage(calculator.message);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      setMessage('Ocurrio un error');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteExpression(id));
      setMessage(calculator.message);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      setMessage('Ocurrio un error');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>
      <Text>{message}</Text>
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
