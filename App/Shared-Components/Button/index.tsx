import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  toShow: string;
  isOperation: boolean;
  handleOnPress: (toShow: string, isOperation: boolean) => void;
  style?: any;
}

const Button: React.FC<Props> = ({
  toShow,
  isOperation,
  handleOnPress,
  style,
}) => {
  const onPress = () => handleOnPress(toShow, isOperation);
  return (
    <TouchableOpacity style={[styles.buttonBase, style]} onPress={onPress}>
      <Text style={styles.text}>{toShow}</Text>
    </TouchableOpacity>
  );
};

export default Button;
