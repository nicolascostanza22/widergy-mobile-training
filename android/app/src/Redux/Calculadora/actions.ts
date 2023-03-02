import * as TYPES from './types';
import {action} from 'typesafe-actions';

export const getExpressions = () =>
  action(TYPES.CalculatorActionsConst.GET_EXPRESSIONS);

export const addExpression = (data: {id: string; expression: string}) =>
  action(TYPES.CalculatorActionsConst.ADD_EXPRESSION, data);

export const editExpression = (id: string, data: string) =>
  action(TYPES.CalculatorActionsConst.EDIT_EXPRESSION, id, data);

export const deleteExpression = (id: string) =>
  action(TYPES.CalculatorActionsConst.DELETE_EXPRESSION, id);

export const deleteAllExpressions = () =>
  action(TYPES.CalculatorActionsConst.DELETE_ALL_EXPRESSION);
