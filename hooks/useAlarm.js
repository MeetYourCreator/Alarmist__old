import React, { useEffect, useState } from 'react'

const useAlarm = () => {
  const [alarm, setAlarm] = useState('')

  useEffect((input) => {
    const time = input.valueAsNumber;
    const alarm = newDate(ms);
    const alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds())
    const alaramDiff = alarmTime.getTime() - (new Date()).getTime()
  })

  return []
}

export default useAlarm;