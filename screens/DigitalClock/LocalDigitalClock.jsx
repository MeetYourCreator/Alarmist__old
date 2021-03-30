import React, { useEffect, useState } from "react"
import { Button, Text, View, SafeAreaView, StyleSheet } from "react-native"
import styled from "styled-components"
import { showLocalTime } from "../../services/time.js"

import SearchBar from '../../components/SearchBar.jsx'

const LocalDigitalClock = ({ navigation }) => {
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
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`
const Clock = styled.View`
  position: relative;
  width: 350px;
  height: auto;
  border: 8px solid #2d2d2d;
  border-radius: 15px;
  background-color: #151617;
`
const ClockText = styled.Text`
  display: flex;
  margin: 15px;
  text-shadow: 3px 3px 20px #f70300;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 65px;
  color: rgb(247, 1, 3);
  }
`
const Location = styled.Text`
  margin-top: 15px;
  margin-right: 7px;
  margin-bottom: 5px;
  margin-left: 7px;
  border-top-width: 2px;

  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #000000;
  font-size: 13px;
  font-variant: small-caps;
`
export default LocalDigitalClock