import {SafeAreaView} from 'react-native';
import React from 'react';
import Button from '../Button';
import styles from './styles';
import {BUTTONS} from '../../utils';

interface Props {
  handleOnPress: (toShow: string, isOperation: boolean) => void;
}

const Keyboard: React.FC<Props> = ({handleOnPress}) => {
  return (
    <SafeAreaView style={styles.KeyboardContainer}>
      {BUTTONS.map(({isOperation, toShow, style}) => {
        return (
          <Button
            key={toShow}
            handleOnPress={handleOnPress}
            isOperation={isOperation}
            toShow={toShow}
            style={style}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default Keyboard;
