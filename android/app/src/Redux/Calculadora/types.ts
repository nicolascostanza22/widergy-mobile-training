export interface CalculatorState {
  expressions: Expression[];
}

export interface Expression {
  id: string;
  expression: string;
}

export enum CalculatorActionsConst {
  GET_EXPRESSIONS = 'GET_EXPRESSIONS',
  ADD_EXPRESSION = 'ADD_EXPRESSION',
  EDIT_EXPRESSION = 'EDIT_EXPRESSION',
  DELETE_EXPRESSION = 'DELETE_EXPRESSION',
  DELETE_ALL_EXPRESSION = 'DELETE_ALL_EXPRESSION',
}
