import { createStore } from 'redux';
import { colorsReducer } from '../features/colors/colorsReducer.js';

const store = createStore(colorsReducer)

export default store;