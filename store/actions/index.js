//Action Creator

export const SET_ALARM = 'SET_ALARM'

export const setAlarm = (id) => {
  //Return an action
  return {
    type: SET_ALARM,
    alarmId: id
  }
}