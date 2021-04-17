import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from './features/colors/colorsReducer.js'
import fontTypesReducer from './features/fontTypes/fontTypesReducer.js'


//The Redux store is reated using the configureStore function from Redux Toolkit. configureStoreequires that we pass in a reducer argument.

export default configureStore({

  reducer: {
    colors: colorsReducer,
    fontTypes: fontTypesReducer
  }
})