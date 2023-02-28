import {useNavigationState} from '@react-navigation/native';
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

function Calculator({navigation, route}): JSX.Element {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [operation, setOperation] = useState<string>('');
  const [result, setResult] = useState<number>(0);

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

  useEffect(() => {
    if (result) {
      setFirstNumber(result.toString());
      setSecondNumber('');
      setOperation('');
    }
  }, [result]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          const routesToShow = route.params?.routesToShow || [];
          routesToShow.push({screen: 'Home', id: routesToShow.length + 1});
          navigation.navigate('History', {routesToShow});
        }}>
        <Text>Historial</Text>
      </TouchableOpacity>
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
    </SafeAreaView>
  );
}

// color violecta ---> #966BDE
// color fondo de la calculadora ---> #434748
// color para las letras es blanco en hexa

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

export default Calculator;
