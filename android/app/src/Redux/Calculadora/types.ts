export interface CalculatorState {
  expressions: Expression[];
  message: string;
  isFetching: boolean;
}

export interface Expression {
  id: string;
  expression: string;
}

export enum CalculatorActionsConst {
  GET_EXPRESSIONS_FETCHING = 'GET_EXPRESSIONS_FETCHING',
  GET_EXPRESSIONS_FULLFILED = 'GET_EXPRESSIONS_FULLFILED',
  GET_EXPRESSIONS_REJECTED = 'GET_EXPRESSIONS_REJECTED',

  ADD_EXPRESSION_FETCHING = 'ADD_EXPRESSION_FETCHING',
  ADD_EXPRESSION_FULLFILED = 'ADD_EXPRESSION_FULLFILED',
  ADD_EXPRESSION_REJECTED = 'ADD_EXPRESSION_REJECTED',

  EDIT_EXPRESSION_FETCHING = 'EDIT_EXPRESSION_FETCHING',
  EDIT_EXPRESSION_FULLFILED = 'EDIT_EXPRESSION_FULLFILED',
  EDIT_EXPRESSION_REJECTED = 'EDIT_EXPRESSION_REJECTED',

  DELETE_EXPRESSION_FETCHING = 'DELETE_EXPRESSION_FETCHING',
  DELETE_EXPRESSION_FULLFILED = 'DELETE_EXPRESSION_FULLFILED',
  DELETE_EXPRESSION_REJECTED = 'DELETE_EXPRESSION_REJECTED',
}
