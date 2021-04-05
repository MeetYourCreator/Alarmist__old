import React, { useState, useEffect } from "react"
import { StyleSheet, Text } from "react-native"
import { setHour, setMinute, setSecond } from "../services/time.js"
import { AnalogClockContainer } from "../components/styled/analog/AnalogClockContainer.js"
import { Clock } from '../components/styled/analog/Clock.js'
import { SecondHand } from '../components/styled/analog/SecondHand.js'
import { MinuteHand } from "../components/styled/analog/MinuteHand.js"
import { HourHand } from "../components/styled/analog/HourHand.js"
import { ClockNumberContainer } from "../components/styled/analog/ClockNumberContainer.js"
import { ClockNumberFont } from "../components/styled/analog/ClockNumberFont.js"
import { ClockCenter } from "../components/styled/analog/ClockCenter.js"

import AppLoading from "expo-app-loading"
import { useFonts, Inter_900Black} from "@expo-google-fonts/inter"
import { Monoton_400Regular } from "@expo-google-fonts/monoton"

const AnalogClock = () => {
  const [hourRatio, setHourRatio] = useState(setHour())
  const [minuteRatio, setMinuteRatio] = useState(setMinute())
  const [secondRatio, setSecondRatio] = useState(setSecond())
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHourRatio(setHour())
      setMinuteRatio(setMinute())
      setSecondRatio(setSecond())
    }, 1000);
    return () => clearInterval(interval)
  }, [])

   let [fontsLoaded] = useFonts({
     Inter_900Black,
     Monoton_400Regular
   })
  
  return (
    <>
      <AnalogClockContainer>
        <ClockCenter />
        <Clock color="blue" borderColor="red">
          <SecondHand
            color="white"
            style={{
              transform: [
                { translateY: 70 },
                { translateX: 0 },
                { rotate: `${secondRatio * 360}deg` },
                { translateY: -70 },
                { translateX: 0 },
              ],
            }}
          />
          <MinuteHand
            style={{
              transform: [
                //MinuteHand moves up as value is lowered
                { translateY: 78 },
                //MinuteHand moves left as value is lowered 
                { translateX: -10 },
                { rotate: `${minuteRatio * 360}deg` },
                { translateY: -68 },
                { translateX: -5 },
              ],
            }}
          />
          <HourHand
            style={{
              transform: [
                { translateY: 70 },
                //HourHand moves right as value is lowered
                { translateX: -10 },
                { rotate: `${hourRatio * 360}deg` },
                { translateY: -50 },
                { translateX: -20 },
              ],
            }}
          />
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "30deg" }],
            }}
          >
            <ClockNumberFont fontFamily="Monoton_400Regular">1</ClockNumberFont>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "60deg" }],
            }}
          >
            <ClockNumberFont>2</ClockNumberFont>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "90deg" }],
            }}
          >
            <Text style={styles.number}>3</Text>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "120deg" }],
            }}
          >
            <Text style={styles.number}>4</Text>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "150deg" }],
            }}
          >
            <Text style={styles.number}>5</Text>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "180deg" }],
            }}
          >
            <Text style={styles.number}>6</Text>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "210deg" }],
            }}
          >
            <Text style={styles.number}>7</Text>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "240deg" }],
            }}
          >
            <Text style={styles.number}>8</Text>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "270deg" }],
            }}
          >
            <Text style={styles.number}>9</Text>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "300deg" }],
            }}
          >
            <Text style={styles.number}>10</Text>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "330deg" }],
            }}
          >
            <Text style={styles.number}>11</Text>
          </ClockNumberContainer>
          <ClockNumberContainer
            style={{
              transform: [{ rotate: "360deg" }],
            }}
          >
            <Text style={styles.number}>12</Text>
          </ClockNumberContainer>
        </Clock>
      </AnalogClockContainer>
    </>
  )
}

const styles = StyleSheet.create({
  number: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 10,
    fontFamily: "Inter_900Black",
  },
})
export default AnalogClock