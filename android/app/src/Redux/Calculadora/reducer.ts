import {initialState} from './initialState';
import {CalculatorActionsConst} from './types';

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CalculatorActionsConst.GET_EXPRESSIONS:
      return {
        ...state,
      };
    case CalculatorActionsConst.ADD_EXPRESSION:
      console.log('bien', state, action.payload);
      return state;
    case CalculatorActionsConst.EDIT_EXPRESSION:
      return state;
    case CalculatorActionsConst.DELETE_EXPRESSION:
      return state;
    case CalculatorActionsConst.DELETE_ALL_EXPRESSION:
      return state;
    default:
      return state;
  }
};

export default reducer;
