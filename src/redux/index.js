import { combineReducers } from 'redux';
import todosReducer from './todolist/reducer';

export default combineReducers({ todosReducer });
