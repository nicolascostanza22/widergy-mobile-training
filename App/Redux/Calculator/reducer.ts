import {initialState} from './initialState';
import {CalculatorActionsConst, Expression} from './types';

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CalculatorActionsConst.GET_EXPRESSIONS:
      return {
        ...state,
      };
    case CalculatorActionsConst.ADD_EXPRESSION:
      return {
        ...state,
        expressions: [action.payload, ...state.expressions],
      };
    case CalculatorActionsConst.EDIT_EXPRESSION:
      return {
        ...state,
        expressions: state.expressions.map((exp: Expression) =>
          exp.id === action.payload.id ? action.payload : exp,
        ),
      };
    case CalculatorActionsConst.DELETE_EXPRESSION:
      return {
        ...state,
        expressions: state.expressions.filter(
          (exp: Expression) => exp.id !== action.payload,
        ),
      };
    case CalculatorActionsConst.DELETE_ALL_EXPRESSION:
      return {
        ...state,
        expressions: [],
      };
    default:
      return {...state};
  }
};

export default reducer;
