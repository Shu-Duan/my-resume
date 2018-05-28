import { handleActions } from 'redux-actions';
import { state } from '../../constants/eduModels';

const eduReducer = (currentState=state, action) => {
  switch (action.type) {
    default:
    	return currentState;
  }
}

export default eduReducer;