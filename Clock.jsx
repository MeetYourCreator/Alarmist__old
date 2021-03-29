import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import { setHour, setMinute, setSecond } from "./time.js"
import styled from 'styled-components/native'
import PropsNumeral from './PropsNumeral.js'

const rotate = degrees => {
  return `transform:rotate(${degrees})`
}

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  background-color: rgb(238,235,235);
  overflow: hidden;
`

const ClockBody = styled.View`
  padding: 120px;
  border: 10px solid red;
`

const Clock = styled.View`
  width: 300px;
  height: 300px;
  background-color: rgba(102, 193, 230, 0.485);
  border-radius: 150px;
  border: 3px solid purple;
  position: relative;
`
const initRotation = `${ Math.PI / 12 }deg`

const ClockNumber = styled.View`
  position: absolute;

  width: 100%;
  height: 100%;
  font-size: 40px;
  background-color: rgba(240,240,214,.1);
  text-align: center;
`

const Number1 = styled.Text`
${rotate('30deg')};
`
const SecondHand = styled.View`
  position: absolute;
  bottom: 45%;
  left: 50%;
  width: 3px;
  height: 50%;
  background-color: red;
  border: 1px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 11;
`
const MinuteHand = styled.View`
  position: absolute;
  bottom: 45%;
  left: 50%;
  width: 8px;
  height: 45%;
  background-color: black;
  border: 2px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 10;
`

const HourHand = styled.View`
  position: absolute;
  bottom: 45%;
  left: 50%;
  width: 3px;
  height: 40%;
  background-color: red;
  border: 1px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 9;
`
const AlarmClock = () => {
  const [hourRatio, setHourRatio] = useState(0)
  const [minuteRatio, setMinuteRatio] = useState(0)
  const [secondRatio, setSecondRatio] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setHourRatio(setHour())
      setMinuteRatio(setMinute())
      setSecondRatio(setSecond())
    }, 1000)
  }, [])

  return (
    <>
      <Container>
        <ClockBody>
          <Clock>
            <SecondHand />
            <MinuteHand />
            <HourHand />

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
        </ClockBody>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({


  number: {
    textAlign: 'center',
    fontSize: 40
  },
})
export default AlarmClock
