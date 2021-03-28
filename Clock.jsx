import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import { setHour, setMinute, setSecond } from "./time.js"
import styled from 'styled-components/native'
import PropsNumeral from './PropsNumeral.js'

const rotate = degrees => {
  return `transform:rotate(${degrees})`
}

const Container = styled.SafeAreaView`
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

const ClockEdge = styled.View`
  background-color:rgba(255, 0, 85, 0.485);
  border-top-right-radius: 250px;
  border-bottom-right-radius: 250px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 50px;
  height: 700px;
`
const ClockFace = styled.View`
  width: 375px;
  height: 375px;
  background-color: rgba(102, 193, 230, 0.485);
  border-radius: 175px;
  border: 3px solid purple;
  position: relative;
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
const Clock = () => {
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
          <ClockFace>
            <SecondHand />
            <MinuteHand />
            <HourHand />
            <View>
              <Text>1</Text>
            </View>
            <View>
              <Text>2</Text>
            </View>
            <View>
              <Text>3</Text>
            </View>
            <View>
              <Text>4</Text>
            </View>
            <View>
              <Text>5</Text>
            </View>
            <View>
              <Text>6</Text>
            </View>
            <View>
              <Text>7</Text>
            </View>
            <View>
              <Text>8</Text>
            </View>
            <View>
              <Text>9</Text>
            </View>
            <View>
              <Text>10</Text>
            </View>
            <View>
              <Text>11</Text>
            </View>
            <View>
              <Text>12</Text>
            </View>
          </ClockFace>
        </ClockBody>
      </Container>
    </>
  )
}

// const styles = StyleSheet.create({
//   clock: {},

//   clockFace: {
//     width: 375,
//     height: 375,
//     backgroundColor: "#66c1e67c",
//     borderRadius: 200,
//     borderColor: "black",
//     borderWidth: 3,
//     position: "relative",
//   },
// })
export default Clock
