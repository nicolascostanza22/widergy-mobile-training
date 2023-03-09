import {createStore, combineReducers} from 'redux';
import calculator from './Calculator/reducer';

export const store = createStore(combineReducers({calculator}));
