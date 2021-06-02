export const SET_ALARM = 'SET_ALARM'

export const setAlarm = (id) => {
  return {type: SET_ALARM, alarmId: id}
}