import { handleActions } from 'redux-actions';
import { state } from '../../constants/skillModels';

const skillReducer = (currentState=state, action) => {
  switch (action.type) {
    default:
    	return currentState;
  }
}

export default skillReducer;