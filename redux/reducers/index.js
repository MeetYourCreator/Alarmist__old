import { alarmAppState } from '../data/alarms.js'
import { createAlarm as CREATE_ALARM } from '../actions'
import { setAlarmHour as SET_ALARM_HOUR } from '../actions'
import { setAlarmMinutes as SET_ALARM_MINUTES } from '../actions'
import { setAlarmLabel as SET_ALARM_LABEL } from '../actions'
import { setAlarmSound as SET_ALARM_SOUND } from '../actions'
import { setAlarmRepeat as SET_ALARM_REPEAT } from '../actions'
import { setAlarmSnooze as SET_ALARM_SNOOZE } from '../actions'
import { setAlarmAsActive as SET_ALARM_AS_ACTIVE } from '../actions'
import { deleteAlarm as DELETE_ALARM } from '../actions'

import { v4 as uuid4 } from 'uuid';
//Write the logic for setting and managing alarms

const initialState = {
  alarms: alarmAppState,
  activeAlarms: alarmAppState,
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