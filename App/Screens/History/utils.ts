import {deleteExpression, editExpression} from '../../Redux/Calculator/actions';
import {Expression} from '../../Redux/Calculator/types';

const handleEdit = (data: Expression, dispatch: any) => {
  dispatch(editExpression(data));
};

const handleDelete = (id: string, dispatch: any) => {
  dispatch(deleteExpression(id));
};

export {handleEdit, handleDelete};
