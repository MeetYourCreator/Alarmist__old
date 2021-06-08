import { CREATE_ALARM } from './types.js'
import { SET_ALARM_HOUR } from './types.js'
import { SET_ALARM_MINUTES } from './types.js'
import { SET_ALARM_LABEL } from './types.js'
import { SET_ALARM_SOUND } from './types.js'
import { SET_ALARM_REPEAT } from './types.js'
import { SET_ALARM_SNOOZE } from './types.js'
import { SET_ALARM_AS_ACTIVE } from './types.js'
import { DELETE_ALARM } from './types.js'


// actions are plain JavaScript objects that have a type field. An action is an event that describes something that happened in the application.

//actions that describe what's happened in the application
//Create a new alarm
//Set the hour of the alarm
//Set the minute of the alarm
//Give the alarm a label
//Choose a sound for the alarm
//Choose if this alarm is going to be repeating, and if so what days of the week will it be active
//Choose whether the alarm will have a snooze option
//Make the alarm inactive 
//Delete the alarm

export const createAlarm = () => {
  return {
    type: CREATE_ALARM,
    payload: alarmIdNumber
  }
}

export const setAlarmHour = () => {
  return {
    type: SET_ALARM_HOUR,
    payload: hourNumber
  }
}

export const setAlarmMinutes = () => {
  return {
    type: SET_ALARM_MINUTES,
    payload: minutesNumber
  }
}


export const setAlarmLabel = () => {
  return {
    type: SET_ALARM_LABEL,
    payload: labelString
  }
}

export const setAlarmSound = () => {
  return {
    type: SET_ALARM_SOUND,
    payload: {alarmSoundObject}
  }
}

export const setAlarmRepeat = () => {
  return {
    type: SET_ALARM_REPEAT,
    payload: alarmRepeatArrayOfStrings
  }
}

export const setAlarmSnooze = () => {
  return {
    type: SET_ALARM_SNOOZE,
    payload: alarmSnoozeBoolean
  }
}

export const setAlarmAsActive = () => {
  return {
    type: SET_ALARM_AS_ACTIVE,
    payload: alarmActiveBoolean
  }
}

export const deleteAlarm = () => {
  return {
    type: DELETE_ALARM,
    payload: alarmIdNumber
  }
}