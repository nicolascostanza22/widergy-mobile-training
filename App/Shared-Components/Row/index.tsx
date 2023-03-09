import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  routeToShow: string;
}

const Row: React.FC<Props> = ({routeToShow}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.item]}>*</Text>
      <Text style={styles.text}>{routeToShow}</Text>
    </View>
  );
};

export default Row;
