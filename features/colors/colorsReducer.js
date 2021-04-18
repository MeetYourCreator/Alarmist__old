import { createStore } from 'redux';

const colorsReducer = (state, action) => {
  if (action.type === 'SET_E8E500')
    return [
      ...state,
      {
        color: '#E8E500'
      }
    ];
  else if (action.type === 'SET_FF2281')
    return [
      ...state,
      {
        color: '#FF2281'
      }
    ];
  else if (action.type === 'SET_75D5FD')
    return [
      ...state,
      {
        color: '#75D5FD'
      }
    ];
  else if (action.type === 'SET_09FBD3')
    return [
      ...state,
      {
        color: '#09FBD3'
      }
    ];
  else if (action.type === 'SET_7122FA')
    return [
      ...state,
      {
        color: '#7122FA'
      }
    ];
  else if (action.type === 'SET_EF281E')
    return [
      ...state,
      {
        color: '#EF281E'
      }
    ];
  else if (action.type === 'SET_0000FF')
    return [
      ...state,
      {
        color: '#0000FF'
      }
    ];
}

//create a Redux store holding the state
//Its API os {subscribe, dispatch, getState}

let store = createStore(colorsReducer)