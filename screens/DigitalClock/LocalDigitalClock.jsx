import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native"
import { showLocalTime } from "../../services/time.js";
import { DigitalClockContainer } from "../../components/styled/digital/DigitalClockContainer.js";
import { Clock } from "../../components/styled/digital/Clock.js";
import { ClockText } from "../../components/styled/digital/ClockText.js";
import { Location } from "../../components/styled/digital/Location.js";

import DigitalClockBackgroundModal from '../../components/DigitalClockNumberColorModal.jsx'
import DigitalClockNumberModal from "../../components/DigitalClockNumberFontModal.jsx"

const LocalDigitalClock = () => {
  const [localTime, setLocalTime] = useState(showLocalTime())

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
              <ClockText color="blue" textShadowColor="blue">
                {localTime}
              </ClockText>
            </Clock>
            <Location>LocalTime</Location>
          </DigitalClockContainer>
        </View>
        <View style={styles.menu}>
          <DigitalClockBackgroundModal
            iconName="color-palette-sharp"
            iconColor="black"
          >
          </DigitalClockBackgroundModal>
          <DigitalClockNumberModal
            iconName="language"
            iconColor="black"
          >
          </DigitalClockNumberModal>
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