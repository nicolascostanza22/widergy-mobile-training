import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  toShow: string;
  isOperation: boolean;
  handleOnPress: (toShow: string, isOperation: boolean) => void;
  styles: any;
}

const Button: React.FC<Props> = ({
  toShow,
  isOperation,
  handleOnPress,
  styles,
}) => {
  return (
    <TouchableOpacity
      style={styles}
      onPress={() => handleOnPress(toShow, isOperation)}>
      <Text style={stylesButton.text}>{toShow}</Text>
    </TouchableOpacity>
  );
};

const stylesButton = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
  },
});

export default Button;
