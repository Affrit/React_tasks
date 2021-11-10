import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import todoReducer from './reducers/todoReducer';

export default combineReducers({
    login: loginReducer,
    todo: todoReducer
  })