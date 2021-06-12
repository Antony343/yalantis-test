import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from "redux";

let reducers = combineReducers({
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;