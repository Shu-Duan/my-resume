import { combineReducers } from 'redux-immutable';
import eduReducer from './EduReducer/eduReducer';
import expReducer from './ExpReducer/expReducer';
import skillReducer from './SkillReducer/skillReducer';
import headReducer from './HeadReducer/headReducer';

const rootReducer = combineReducers({
  eduReducer,
  expReducer,
  skillReducer,
  headReducer
});

export default rootReducer;