import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Row from '../../components/Row';

const HistoryRoutes = ({route, navigation}) => {
  const routesToShow = route.params?.routesToShow || [];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          routesToShow.push({screen: 'Historial', id: routesToShow.length + 1});
          navigation.navigate('Home', {routesToShow});
        }}>
        <Text style={styles.textGoBack}>Volver a Home</Text>
      </TouchableOpacity>
      <FlatList
        data={routesToShow}
        renderItem={({item, index}) => (
          <Row key={index} routeToShow={item.screen} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434748',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
    paddingVertical: 10,
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
  },
  textGoBack: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default HistoryRoutes;
