import { handleActions } from 'redux-actions';
import { state } from '../../constants/expModels';

const expReducer = (currentState=state, action) => {
  switch (action.type) {
    default:
      return currentState;
  }
}

export default expReducer;