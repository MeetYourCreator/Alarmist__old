import { CREATE_ALARM } from 'types.js'

//Action Creator

export const createAlarm = (id) => {
  //Return an action
  return {
    type: CREATE_ALARM,
    payload: id
  }
}