import {ALARMS} from '../../data/alarms.js'
import { SET_ALARM } from '../actions/alarmsActionsObjects.js'

//Write the logic for setting and managng alarms

const initialState = {
  alarms: ALARMS,
  activeAlarms: ALARMS,
  pinnedAlarms: []
}

const alarmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALARM:
      const existingAlarmsIndex = state.alarms.findIndex(alarm => alarm.id === action.alarmId)
      if (existingAlarmsIndex >= 0) {
        const existingAlarms = [...state.alarms];
        return existingAlarms;
      } else {
        const newAlarm = state.alarms.find(alarm => alarm.id === action.alarmId)
        return {...state, alarms: state.alarms.concat(newAlarm)}
      }
    default:
      return state;
  }
  }

export default alarmsReducer;