import React, {useEffect, useState} from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import styled from 'styled-components'
import {showLocalTime} from '../../time.js'

const LocalDigitalClock = () => {
  const [localTime, setLocalTime] = useState(showLocalTime())

  useEffect(() => {
    setTimeout(() => {
      setLocalTime(showLocalTime())
    }, 1000)
  })

  return (
    <>
      <LocalClockContainer>
        <Clock>
          <ClockText>{localTime}</ClockText>
        </Clock>
        <Location>LocalTime</Location>
      </LocalClockContainer>
    </>
  )
}

const LocalClockContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-width: 2px;
  border-top-color: #fac931;
  border-right-width: 2px;
  border-right-color: #fac931;
  border-bottom-width: 2px;
  border-bottom-color: #fac931;
  border-left-width: 2px;
  border-left-color: #fac931;
  padding-top: 40px;
  padding-bottom: 30px;
`
const Clock = styled.View`
  position: relative;
  width: 150px;
  height: auto;
  border: 3px solid #000000;
  border-radius: 15px;
  background-color: #151617;
  @media (max-width: 505px) {
    width: 290px;
    height: auto;
  }
`
const ClockText = styled.Text`
  display: flex;
  margin: 40px 0px;
  text-shadow: 3px 3px 20px #f70300;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: rgb(247, 1, 3);
  }
`
const Location = styled.Text`
  margin-top: 15px;
  margin-right: 7px;
  margin-bottom: 5px;
  margin-left: 7px;
  border-top-width: 2px;
  margin-top: #000000;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #000000;
  font-size: 13px;
  font-variant: small-caps;
`
export default LocalDigitalClock;