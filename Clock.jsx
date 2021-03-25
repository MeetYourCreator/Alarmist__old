import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import { setHour, setMinute, setSecond } from "./time.js"
import styled from 'styled-components/native'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  background-color: rgb(238,235,235);
  overflow: hidden;
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
  border: 3px solid white;
  position: relative;
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
        {/* <View style={styles.clock}> */}
          <ClockFace>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5</Text>
            <Text>6</Text>
            <Text>7</Text>
            <Text>8</Text>
            <Text>9</Text>
            <Text>10</Text>
            <Text>11</Text>
            <Text>12</Text>
          </ClockFace>
        {/* </View> */}
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
