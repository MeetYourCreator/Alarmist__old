import { createStore, combineReducers } from 'redux';
import alarmsReducer from './reducers'

const rootReducer = combineReducers({
  alarmsReducer: alarmsReducer
});

const store = createStore(rootReducer);

export default store;