import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Row from '../../Shared-Components/Row/index';
import styles from './styles';

interface Props {
  route: any;
  navigation: any;
}

const HistoryRoutes = ({route, navigation}: Props) => {
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
      <View style={styles.tableContainer}>
        <FlatList
          data={routesToShow}
          renderItem={({item, index}) => (
            <Row key={index} routeToShow={item.screen} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default HistoryRoutes;
