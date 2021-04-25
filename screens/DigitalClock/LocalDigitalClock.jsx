import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native"
import { showLocalTime } from "../../services/time.js";
import { DigitalClockContainer } from "../../components/styled/digital/DigitalClockContainer.js";
import { Clock } from "../../components/styled/digital/Clock.js";
import { ClockText } from "../../components/styled/digital/ClockText.js";
import { Location } from "../../components/styled/digital/Location.js";

import DigitalClockNumberColorModal from '../../components/DigitalClockNumberColorModal.jsx'
import DigitalClockNumberFontModal from "../../components/DigitalClockNumberFontModal.jsx"

const LocalDigitalClock = () => {
  const [localTime, setLocalTime] = useState(showLocalTime())
  const [colorValue, setColorValue] = useState('')

  const colorHandler = event => {
    setColorValue(event)
  }

  const currentColor = colorValue;

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
              <ClockText style={[styles.clockText, {color: currentColor, textShadow: currentColor}]}>
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
    fontSize: 65,
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