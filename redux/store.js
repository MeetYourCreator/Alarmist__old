import { createStore, combineReducers } from 'redux';
import alarmsReducer from './redcuers';

const rootReducer = combineReducers({
  alarms: alarmsReducer
})

const store = createStore(rootReducer);

export default store;