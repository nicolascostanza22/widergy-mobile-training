import * as TYPES from './types';
import {action} from 'typesafe-actions';

export const getExpressions = () =>
  action(TYPES.CalculatorActionsConst.GET_EXPRESSIONS);

export const addExpression = (data: TYPES.Expression) =>
  action(TYPES.CalculatorActionsConst.ADD_EXPRESSION, data);

export const editExpression = (data: TYPES.Expression) =>
  action(TYPES.CalculatorActionsConst.EDIT_EXPRESSION, data);

export const deleteExpression = (id: string) =>
  action(TYPES.CalculatorActionsConst.DELETE_EXPRESSION, id);

export const deleteAllExpressions = () =>
  action(TYPES.CalculatorActionsConst.DELETE_ALL_EXPRESSION);
