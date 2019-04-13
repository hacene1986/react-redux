import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import ActiveUserReducer from './reducer_activeUser'
const rootReducer = combineReducers({
 // state: (state = {}) => state
 users : UsersReducer,
 activeUser: ActiveUserReducer
});

export default rootReducer;
