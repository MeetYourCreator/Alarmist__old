import { createStore, combineReducers } from 'redux';
import alarmsReducer from '../redux/reducers';

const rootReducer = combineReducers({
  alarms: alarmsReducer
})

const store = createStore(rootReducer);

export default store;