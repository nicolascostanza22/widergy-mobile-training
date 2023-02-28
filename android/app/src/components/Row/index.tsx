import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

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

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingVertical: 3,
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: '#FFF',
  },
  item: {
    fontSize: 20,
    color: '#FFF',
    paddingRight: 15,
  },
});

export default Row;
