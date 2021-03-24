export const setHour = () => {
  const date = new Date();
  const secondRatio = date.getSeconds() / 60;
  const minuteRatio = (secondRatio + date.getMinutes()) / 60;
  const hourRatio = (minuteRatio + date.getHours()) / 12;

  return hourRatio
}

export const setMinute = () => {
  const date = new Date();
  const secondRatio = date.getSeconds() / 60;
  const minuteRatio = (secondRatio + date.getMinutes()) / 60;

  return minuteRatio
}

export const setSecond = () => {
  const date = new Date();
  const secondRatio = date.getSeconds() / 60;

  return secondRatio

}

export const angleClock = (hour, minutes) => {
  const minuteAngle = minutes * 6
  const hourAngle = (hour * 30) + minutes * 0.5
  const angle = Math.abs(hourAngle - minuteAngle)
  return Math.min(angle, 360 - angle)
}
