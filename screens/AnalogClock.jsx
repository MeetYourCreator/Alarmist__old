import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import { setHour, setMinute, setSecond } from "../services/time.js"
import styled, {keyframes} from "styled-components"


const AnalogClock = ({ navigate }) => {
  const [hourRatio, setHourRatio] = useState(setHour())
  const [minuteRatio, setMinuteRatio] = useState(setMinute())
  const [secondRatio, setSecondRatio] = useState(setSecond())
  
  useEffect(() => {
    setInterval(() => {
      setHourRatio(setHour())
      setMinuteRatio(setMinute())
      setSecondRatio(setSecond())
    }, 1000);

  }, [])

  return (
    <>
     
        <ClockContainer>
          <ClockCenter />
          <Clock>
            <SecondHand
              style={{
                transform: [
                  { translateY: 75 },
                  { translateX: 0 },
                  { rotate: `${secondRatio * 360}deg` },
                  { translateY: -75 },
                  { translateX: 0 },
                ],
              }}
            />
            <MinuteHand
              style={{
                transform: [
                  { translateY: 75 },
                  { translateX: 0 },
                  { rotate: `${minuteRatio * 360}deg` },
                  { translateY: -75 },
                  { translateX: 5},
                ],
              }}
            />
            <HourHand
              style={{
                transform: [
                  { translateY: 75 },
                  { translateX: -10 },
                  { rotate: `${hourRatio * 360}deg` },
                  { translateY: -75 },
                  { translateX: 0 },
                ],
              }}
            />
            <ClockNumber
              style={{
                transform: [{ rotate: "30deg" }],
              }}
            >
              <Text style={styles.number}>1</Text>
            </ClockNumber>
            <ClockNumber
              style={{
                transform: [{ rotate: "60deg" }],
              }}
            >
              <Text style={styles.number}>2</Text>
            </ClockNumber>
            <ClockNumber
              style={{
                transform: [{ rotate: "90deg" }],
              }}
            >
              <Text style={styles.number}>3</Text>
            </ClockNumber>

            <ClockNumber
              style={{
                transform: [{ rotate: "120deg" }],
              }}
            >
              <Text style={styles.number}>4</Text>
            </ClockNumber>
            <ClockNumber
              style={{
                transform: [{ rotate: "150deg" }],
              }}
            >
              <Text style={styles.number}>5</Text>
            </ClockNumber>
            <ClockNumber
              style={{
                transform: [{ rotate: "180deg" }],
              }}
            >
              <Text style={styles.number}>6</Text>
            </ClockNumber>
            <ClockNumber
              style={{
                transform: [{ rotate: "210deg" }],
              }}
            >
              <Text style={styles.number}>7</Text>
            </ClockNumber>
            <ClockNumber
              style={{
                transform: [{ rotate: "240deg" }],
              }}
            >
              <Text style={styles.number}>8</Text>
            </ClockNumber>
            <ClockNumber
              style={{
                transform: [{ rotate: "270deg" }],
              }}
            >
              <Text style={styles.number}>9</Text>
            </ClockNumber>

            <ClockNumber
              style={{
                transform: [{ rotate: "300deg" }],
              }}
            >
              <Text style={styles.number}>10</Text>
            </ClockNumber>
            <ClockNumber
              style={{
                transform: [{ rotate: "330deg" }],
              }}
            >
              <Text style={styles.number}>11</Text>
            </ClockNumber>
            <ClockNumber
              style={{
                transform: [{ rotate: "360deg" }],
              }}
            >
              <Text style={styles.number}>12</Text>
            </ClockNumber>
          </Clock>
        </ClockContainer>
     
    </>
  )
}

const ClockContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  padding-top: 20px;
  
`
const Clock = styled.View`
  width: 325px;
  height: 325px;
  background-color: rgba(102, 193, 230, 0.485);
  border-radius: 170px;
  border: 5px solid purple;
  position: relative;
`
const ClockNumber = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`
const SecondHand = styled.View`
  bottom: 0%;
  left: 50%;
  width: 3px;
  height: 45%;
  background-color: red;
  border: 1px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 11;
`
const MinuteHand = styled.View`
  bottom: 45%;
  left: 50%;
  width: 9px;
  height: 45%;
  background-color: black;
  border: 2px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 10;
`

const HourHand = styled.View`
  bottom: 75%;
  left: 50%;
  width: 10px;
  height: 30%;
  background-color: black;
  border: 2px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 9;
`

const ClockCenter = styled.View`
bottom: -23%;
left: 0%;
width: 40px;
height: 40px;
border-radius: 20px;
background-color: black;
z-index: 20;
`
const styles = StyleSheet.create({
  number: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 10
  },
})
export default AnalogClock