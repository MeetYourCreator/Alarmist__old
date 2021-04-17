import { createStore } from 'redux';

const colorsReducer = (state = { value } , action) => {
  switch (action.type) {
    case 'color/updated';
      return { value: state.value }
  }
}

//create a Redux store holding the state
//Its API os {subscribe, dispatch, getState}

let store = createStore(colorsReducer)