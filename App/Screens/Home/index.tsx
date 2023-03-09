import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Keyboard from '../../Shared-Components/Keyboard';
import {handleOnPress} from './utils';
import {useDispatch} from 'react-redux';
import {addExpression} from '../../Redux/Calculator/actions';

interface Props {
  navigation: any;
}

function Home({navigation}: Props): JSX.Element {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [operation, setOperation] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [expression, setExpression] = useState<string>('');
  const dispatch = useDispatch();

  const onPress = (toShow: string, isOperation: boolean) =>
    handleOnPress(
      toShow,
      isOperation,
      firstNumber,
      setFirstNumber,
      secondNumber,
      setSecondNumber,
      operation,
      setOperation,
      setResult,
      setMessage,
      setExpression,
    );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          dispatch(
            addExpression({
              id: Math.random().toString(),
              expression,
            }),
          );
        }}>
        <Text style={styles.textGoBack}>Guardar</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text
          style={
            styles.text
          }>{`${firstNumber} ${operation} ${secondNumber}`}</Text>
        <View style={styles.resultContainer}>
          <Text numberOfLines={1} style={[styles.text, styles.result]}>
            {result}
          </Text>
          <Text style={[styles.text, styles.errorMessage]}>{message}</Text>
        </View>
      </View>
      <Keyboard handleOnPress={onPress} />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.navigate('History');
        }}>
        <Text style={styles.textGoBack}>Historial</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Home;
