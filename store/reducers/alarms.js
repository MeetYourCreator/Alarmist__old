import {ALARMS} from '../../data/alarms.js'

const initialState = {
  alarms: ALARMS,
  activeAlarms: ALARMS,
  pinnedAlarms: []
}

const alarmsReducer = (state = initialState, action) => {
  return state;
}

export default alarmsReducer;