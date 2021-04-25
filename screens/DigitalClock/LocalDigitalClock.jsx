import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native"
import { showLocalTime } from "../../services/time.js";
import { DigitalClockContainer } from "../../components/styled/digital/DigitalClockContainer.js";
import { Clock } from "../../components/styled/digital/Clock.js";
import { ClockText } from "../../components/styled/digital/ClockText.js";
import { Location } from "../../components/styled/digital/Location.js";

import DigitalClockNumberColorModal from '../../components/DigitalClockNumberColorModal.jsx'
import DigitalClockNumberFontModal from "../../components/DigitalClockNumberFontModal.jsx"

const LocalDigitalClock = () => {
  const [localTime, setLocalTime] = useState(showLocalTime())
  const [colorValue, setColorValue] = useState("#0000FF")
  const [fontValue, setFontValue] = useState("press-start-2p")

  const colorHandler = event => {
    setColorValue(event)
  }

  const fontHandler = event =>
    setFontValue(event)

  const currentColor = colorValue;
  const currentFont = fontValue;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocalTime(showLocalTime())
    }, 1000)
    return () => clearTimeout(timeout)
  })

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.clockContainer}>
          <DigitalClockContainer>
            <Clock>
              <ClockText style={[styles.clockText, {color: currentColor, textShadowColor: currentColor, fontFamily: currentFont}]}>
                {localTime}
              </ClockText>
            </Clock>
            <Location>LocalTime</Location>
          </DigitalClockContainer>
        </View>
        <View style={styles.menu}>
          <DigitalClockNumberColorModal
            iconName="color-palette-sharp"
            iconColor="black"
            onColorHandle={colorHandler}
          >
          </DigitalClockNumberColorModal>
          <DigitalClockNumberFontModal
            iconName="language"
            iconColor="black"
            onFontHandle={fontHandler}
          >
          </DigitalClockNumberFontModal>
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
  clockText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    textAlign: "center",
    fontSize: 35,
    textShadowColor: "#f70300",
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

export default LocalDigitalClock;