import { createStore, combineReducers } from 'redux';
import alarmsReducer from './redcuers'

const rootReducer = createStore({
  alarmsReducer: alarmsReducer
});

const store = createStore(rootReducer);

export default store;