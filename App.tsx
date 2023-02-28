import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Calculator from './android/app/src/Screens/Calculator';
import HistoryRoutes from './android/app/src/Screens/History';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Calculator} />
        <Stack.Screen name="History" component={HistoryRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
