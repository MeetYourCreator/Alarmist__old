import React, { useEffect, useState } from "react";
import { showLocalTime } from "../../services/time.js";
import { DigitalClockContainer } from "../../components/styled/digital/DigitalClockContainer.js";
import { Clock } from "../../components/styled/digital/Clock.js";
import { ClockText } from "../../components/styled/digital/ClockText.js";
import { Location } from "../../components/styled/digital/Location.js";

const LocalDigitalClock = () => {
  const [localTime, setLocalTime] = useState(showLocalTime())

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocalTime(showLocalTime())
    }, 1000)
    return () => clearTimeout(timeout)
  })

  return (
    <>
      <DigitalClockContainer>
        <Clock>
          <ClockText color="blue" textShadowColor="blue">
            {localTime}
          </ClockText>
        </Clock>
        <Location>LocalTime</Location>
      </DigitalClockContainer>
    </>
  )
}

export default LocalDigitalClock;