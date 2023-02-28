import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import Button from '../Button';

interface Props {
  handleOnPress: (toShow: string, isOperation: boolean) => void;
}

const Keyboard: React.FC<Props> = ({handleOnPress}) => {
  return (
    <SafeAreaView style={styles.KeyboardContainer}>
      <View style={[styles.row, styles.firstRow]}>
        <Button
          handleOnPress={handleOnPress}
          isOperation
          toShow={'C'}
          styles={[styles.buttonContainer, styles.cleanButtons]}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation
          toShow={'AC'}
          styles={[styles.buttonContainer, styles.cleanButtons]}
        />
      </View>
      <View style={styles.row}>
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'7'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'8'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'9'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation
          toShow={'/'}
          styles={styles.buttonContainer}
        />
      </View>
      <View style={styles.row}>
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'4'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'5'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'6'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation
          toShow={'*'}
          styles={styles.buttonContainer}
        />
      </View>
      <View style={styles.row}>
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'1'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'2'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'3'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation
          toShow={'+'}
          styles={styles.buttonContainer}
        />
      </View>
      <View style={styles.row}>
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'.'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation={false}
          toShow={'0'}
          styles={styles.buttonContainer}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation
          toShow={'='}
          styles={[styles.buttonContainer, styles.result]}
        />
        <Button
          handleOnPress={handleOnPress}
          isOperation
          toShow={'-'}
          styles={styles.buttonContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  KeyboardContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#434748',
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 50,
    height: 70,
    width: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#393A3E',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    elevation: 4,
  },
  row: {
    height: '20%',
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  firstRow: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 'auto',
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  cleanButtons: {
    width: '45%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#966BDE',
  },
  result: {
    backgroundColor: '#966BDE',
  },
});

export default Keyboard;
