import {createStore, combineReducers} from 'redux';
import calculator from './Calculadora/reducer';

export const store = createStore(combineReducers({calculator}));
