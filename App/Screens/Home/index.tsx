import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Keyboard from '../../Shared-Components/Keyboard';
import {handleOnPress} from './utils';

interface Props {
  navigation: any;
  route: any;
}

function Calculator({navigation, route}: Props): JSX.Element {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [operation, setOperation] = useState<string>('');
  const [result, setResult] = useState<number>(0);

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
    );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          const routesToShow = route.params?.routesToShow || [];
          routesToShow.push({screen: 'Home', id: routesToShow.length + 1});
          navigation.navigate('History', {routesToShow});
        }}>
        <Text style={styles.textGoBack}>Historial</Text>
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
    </SafeAreaView>
  );
}

export default Calculator;
