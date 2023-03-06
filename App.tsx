import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Calculator from './android/app/src/Screens/Calculator';
import HistoryExpresssions from './android/app/src/Screens/History';
import {createStackNavigator} from '@react-navigation/stack';
import {connect, Provider} from 'react-redux';
import {store} from './android/app/src/Redux/store';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const CalculatorContainer = connect((state: any) => ({
    calculator: state.calculator,
  }))(Calculator);

  const HistoryContainer = connect((state: any) => ({
    calculator: state.calculator,
  }))(HistoryExpresssions);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={CalculatorContainer} />
          <Stack.Screen name="History" component={HistoryContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
