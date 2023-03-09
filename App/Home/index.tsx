import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Keyboard from './Components/Keyboard';
import {handleOnPress} from './utils';

function Home() {
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
      <View style={styles.header}>
        <Text
          style={
            styles.text
          }>{`${firstNumber} ${operation} ${secondNumber}`}</Text>
        <ScrollView style={styles.resultContainer}>
          <Text numberOfLines={1} style={[styles.text, styles.result]}>
            {result}
          </Text>
          <Text style={styles.text}>{message}</Text>
        </ScrollView>
      </View>
      <Keyboard handleOnPress={onPress} />
    </SafeAreaView>
  );
}

export default Home;
