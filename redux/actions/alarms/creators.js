import { CREATE_ALARM } from './types.js'

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

//Action Creator

export const createAlarm = (id) => {
  //Return an action
  return {
    type: CREATE_ALARM,
    payload: id
  }
}