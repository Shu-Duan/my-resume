import { handleActions } from 'redux-actions';
import { state } from '../../constants/headModels';

const headReducer = (currentState=state, action) => {
  switch (action.type) {
    default:
    	return currentState;
  }
}

export default headReducer;