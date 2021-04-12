import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { setHour, setMinute, setSecond } from "../services/time.js";
import { AnalogClockContainer } from "../components/styled/analog/AnalogClockContainer.js";
import { Clock } from "../components/styled/analog/Clock.js";
import { SecondHand } from "../components/styled/analog/SecondHand.js";
import { MinuteHand } from "../components/styled/analog/MinuteHand.js";
import { HourHand } from "../components/styled/analog/HourHand.js";
import { ClockNumberContainer } from "../components/styled/analog/ClockNumberContainer.js";
import { ClockNumberFont } from "../components/styled/analog/ClockNumberFont.js";
import { ClockCenter } from "../components/styled/analog/ClockCenter.js";
import AnalogClockFaceModal from "../components/AnalogClockFaceModal.jsx";
import AnalogClockNumberModal from "../components/AnalogClockNumberModal.jsx";

import AppLoading from "expo-app-loading"
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Monoton_400Regular } from "@expo-google-fonts/monoton";

const AnalogClock = () => {
  const [hourRatio, setHourRatio] = useState(setHour())
  const [minuteRatio, setMinuteRatio] = useState(setMinute())
  const [secondRatio, setSecondRatio] = useState(setSecond())
  
  const [color, setColor] =useState()
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHourRatio(setHour())
      setMinuteRatio(setMinute())
      setSecondRatio(setSecond())
    }, 1000)
    return () => clearInterval(interval)
  }, [])



  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Monoton_400Regular,
  })

  
  
  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.clockContainer}>
          <AnalogClockContainer>
            <ClockCenter />
            <Clock
           
        
            >
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
                    { translateX: -5 },
                    { rotate: `${minuteRatio * 360}deg` },
                    { translateY: -75 },
                    { translateX: 0 },
                  ],
                }}
              />
              <HourHand
                style={{
                  transform: [
                    //HourHand moves up as value is lowered
                    { translateY: 80 },
                    //HourHand moves left as value is lowered
                    { translateX: 5 },
                    { rotate: `${hourRatio * 360}deg` },
                    { translateY: -65 },
                    //moves left as value is lowered
                    { translateX: 5 },
                  ],
                }}
              />
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "30deg" }],
                }}
              >
                <ClockNumberFont fontFamily="Monoton_400Regular">
                  1
                </ClockNumberFont>
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
        </View>
        <View style={styles.menu}>
          <AnalogClockFaceModal
            iconName="color-palette-sharp"
            iconColor="black"
            value={color}
            onPress={setColor}
          ></AnalogClockFaceModal>
          <AnalogClockNumberModal
            iconName="language"
            iconColor="black"
          ></AnalogClockNumberModal>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  clockContainer: {
    flex: 1,
    marginTop: 180,
    marginBottom: 90,
  },
  number: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 10,
    fontFamily: "Inter_900Black",
  },
  menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    padding: 0,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
})

export default AnalogClock;