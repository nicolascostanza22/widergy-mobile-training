import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Keyboard from '../../components/Keyboard';
import {addExpression} from '../../Redux/Calculadora/thunks';
import {CalculatorState} from '../../Redux/Calculadora/types';

interface Props {
  navigation: any;
  dispatch: any;
  calculator: CalculatorState;
}

function Calculator({navigation, calculator, dispatch}: Props): JSX.Element {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [operation, setOperation] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [expression, setExpression] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (result && secondNumber) {
      setExpression(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
    }
    if (result) {
      setFirstNumber(result.toString());
      setSecondNumber('');
      setOperation('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  useEffect(() => {
    if (calculator.message) {
      setMessage(calculator.message);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }, [calculator.message]);

  const handleOnPress = (toShow: string, isOperation: boolean) => {
    switch (toShow) {
      case '=':
        if (operation && !secondNumber) {
          break;
        }
        getResult();
        break;
      case 'AC':
        setFirstNumber('');
        setSecondNumber('');
        setOperation('');
        setResult(0);
        break;
      case 'C':
        if (secondNumber) {
          setSecondNumber(prev => prev.slice(0, -1));
          break;
        }
        if (operation) {
          setOperation('');
          break;
        }
        setFirstNumber(prev => prev.slice(0, -1));
        break;
      case '+':
      case '/':
      case '-':
      case '*':
        if (!operation) {
          setOperation(toShow);
        }
        break;
      default:
        if (operation && !isOperation) {
          setSecondNumber(prev => prev + toShow);
        }
        if (!operation && !isOperation) {
          setFirstNumber(prev => prev + toShow);
        }
        break;
    }
  };

  const getResult = () => {
    switch (operation) {
      case '+':
        setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
        break;
      case '-':
        setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
        break;
      case '*':
        setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
        break;
      case '/':
        setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
        break;
      default:
        break;
    }
  };

  const onSave = async () => {
    try {
      setMessage('Cargando...');
      await dispatch(
        addExpression({
          id: Math.random().toString(),
          expression,
        }),
      );
    } catch (error) {
      setMessage('Ocurrio un error');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => onSave()}>
        <Text style={styles.textGoBack}>Guardar</Text>
      </TouchableOpacity>
      <Text style={[styles.responseMessage]}>{message}</Text>
      <View style={styles.header}>
        <Text
          style={
            styles.text
          }>{`${firstNumber} ${operation} ${secondNumber}`}</Text>
        <ScrollView style={styles.resultContainer} horizontal={true}>
          <Text numberOfLines={1} style={[styles.text, styles.result]}>
            {result}
          </Text>
        </ScrollView>
      </View>
      <Keyboard handleOnPress={handleOnPress} />
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
    marginVertical: 10,
  },
  textGoBack: {
    color: '#FFF',
    fontSize: 18,
  },
  responseMessage: {
    color: '#FFF',
    fontSize: 22,
    textAlign: 'center',
    width: '100%',
  },
});

export default Calculator;
