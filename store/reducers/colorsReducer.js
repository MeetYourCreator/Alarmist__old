import { COLORS } from '../../data/colors.js'
import { SET_E8E500 } from '../actions/color.js'
import { SET_FF2281  } from '../actions/color.js'
import { SET_75D5FD } from '../actions/color.js'
import { SET_09FBD3} from '../actions/color.js'
import { SET_7122FA } from '../actions/color.js'
import { SET_EF281E } from '../actions/color.js'
import { SET_0000FF } from '../actions/color.js'

const initialState = {
  colors: COLORS,
  filteredColors: COLORS,
}

export const colorsReducer = (state = initialState, action) => {
  if (action.type === SET_E8E500)
    return state.filter(color => color === '#E8E500');
  else if (action.type === SET_FF2281)
    return state.filter(color => color === '#FF2281');
  else if (action.type === SET_75D5FD)
    return state.filter(color => color === '#75D5FD');
  else if (action.type === SET_09FBD3)
    return state.filter(color => color === '#09FBD3');
  else if (action.type === SET_7122FA)
    return state.filter(color => color === '#7122FA');
  else if (action.type === SET_EF281E)
    return state.filter(color => color === '#EF281E');
  else if (action.type === SET_0000FF)
    return state.filter(color => color === '#0000FF');
  else
    return state;
}