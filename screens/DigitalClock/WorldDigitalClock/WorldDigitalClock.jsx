import React from "react"
import { Text, View, SafeAreaView, StyleSheet } from "react-native"
import styled from "styled-components"

const WorldDigitalClock = ({ id, unix, zonename, country }) => {
  return (
    <>
      {country !== zonename && (
        <WorldClockContainer>
          <Clock>
            <ClockText>{unix}</ClockText>
          </Clock>
          <Location>
            {zonename}, {country}
          </Location>
        </WorldClockContainer>
      )}
    </>
  )
}

const WorldClockContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const Clock = styled.View`
  position: relative;
  width: 350px;
  height: auto;
  border-width: 8;
  border-color; #000000;
  border-radius: 15px;
  background-color: #151617;
`
const ClockText = styled.Text`
  display: flex;
  padding: 10px;
  text-shadow: 3px 3px 20px #f70300;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: rgb(247, 1, 3);
`
const Location = styled.Text`
  margin-top: 15px;
  margin-right: 7px;
  margin-bottom: 5px;
  margin-left: 7px;
  border-top-width: 2px;
  border-top-color: #000000;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #000000;
  font-size: 13px;
  font-variant: small-caps;
`
export default WorldDigitalClock
