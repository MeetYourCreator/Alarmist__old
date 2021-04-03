import React, { useEffect, useState } from "react"
import { Button, Text, View, SafeAreaView, StyleSheet } from "react-native"
import styled from "styled-components"
import { showLocalTime } from "../../services/time.js"
import { DigitalClockContainer } from "../../components/styled/digital/DigitalClockContainer.js"
import { Clock } from '../../components/styled/digital/Clock.js'
import { ClockText } from "../../components/styled/digital/ClockText.js"
import { Location } from "../../components/styled/digital/Location.js"

const LocalDigitalClock = ({ navigation }) => {
  const [localTime, setLocalTime] = useState(showLocalTime())

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocalTime(showLocalTime())
    }, 1000);
    return () => clearTimeout(timeout)
  })

  return (
    <>
      <DigitalClockContainer>
        <Clock>
          <ClockText>{localTime}</ClockText>
        </Clock>
        <Location>LocalTime</Location>
      </DigitalClockContainer>
    </>
  )
}

// const LocalClockContainer = styled.View`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 40px;
// `

// const Clock = styled.View`
//   position: relative;
//   width: 350px;
//   height: auto;
//   border: 8px solid #2d2d2d;
//   border-radius: 15px;
//   background-color: #151617;
// `

// const ClockText = styled.Text`
//   display: flex;
//   margin: 15px;
//   text-shadow: 3px 3px 20px #f70300;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   font-size: 65px;
//   color: rgb(247, 1, 3);
//   }
// `

// const Location = styled.Text`
//   margin-top: 15px;
//   margin-right: 7px;
//   margin-bottom: 5px;
//   margin-left: 7px;
//   border-top-width: 2px;
//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   color: #000000;
//   font-size: 13px;
//   font-variant: small-caps;
// `

export default LocalDigitalClock