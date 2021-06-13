import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from "redux";
import employeesReducer from './employees-reducer/reducer';

let reducers = combineReducers({
  employeesPage: employeesReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;