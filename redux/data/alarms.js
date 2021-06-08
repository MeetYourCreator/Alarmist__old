//initial application state
export let alarmAppState = {
  alarms: [
    {
      id: 0,
      hour: 0,
      minute: 0,
      label: '',
      sound: '',
    }
  ],
  filters: {
    repeat: [],
    snooze: false
  }
}
