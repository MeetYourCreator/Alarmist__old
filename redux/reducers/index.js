import { ALARMS } from '../data/alarms.js'
import { CREATE_ALARM } from '../actions'

import { v4 as uuid4 } from 'uuid';
//Write the logic for setting and managing alarms

const initialState = {
  alarms: ALARMS,
  activeAlarms: ALARMS,
  pinnedAlarms: []
}

const alarmsReducer = (state = initialState, action) => {
  console.log('action:' + action);
  switch (action.type) {
    case CREATE_ALARM:
      let newAlarm = {};
      newAlarm.id = uuid4();
      console.log('newAlarm:' + newAlarm)
      return [
        ...state,
        state.concat(newAlarm)
      ]
    // case SET_ALARM:
    //   const existingAlarmsIndex = state.alarms.findIndex(alarm => alarm.id === action.alarmId)
    //   if (existingAlarmsIndex >= 0) {
    //     const existingAlarms = [...state.alarms];
    //     return existingAlarms;
    //   } else {
    //     const newAlarm = state.alarms.find(alarm => alarm.id === action.alarmId)
    //     return {...state, alarms: state.alarms.concat(newAlarm)}
    //   }
    default:
      return state;
  }
}

export default alarmsReducer;