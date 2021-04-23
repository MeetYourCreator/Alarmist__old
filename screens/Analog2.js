import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native"
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
import Modal from "react-native-modal"
import MenuColorButton from "../components/MenuColorButton.jsx"
import { Ionicons } from "@expo/vector-icons"
import AnalogClockNumberModal from "../components/AnalogClockNumberModal.jsx";
import { _E8E500 } from "../data/colors2.js"
import { _FF2281 } from "../data/colors2.js"
import { _75D5FD } from "../data/colors2.js"
import { _09FBD3 } from "../data/colors2.js"
import { _7122FA } from "../data/colors2.js"
import { _EF281E } from "../data/colors2.js"
import { _0000FF } from "../data/colors2.js"

const colors = [
  {
    value: _E8E500,
  },
  {
    value: _FF2281,
  },
  {
    value: _75D5FD,
  },
  {
    value: _09FBD3,
  },
  {
    value: _7122FA,
  },
  {
    value: _EF281E,
  },
  {
    value: _0000FF,
  },
]

const AnalogClock = () => {
  const [hourRatio, setHourRatio] = useState(setHour())
  const [minuteRatio, setMinuteRatio] = useState(setMinute())
  const [secondRatio, setSecondRatio] = useState(setSecond())

  const [showModal, setShowModal] = useState(false)
  const [colorValues, setColorValues] = useState(colors)

  let handleColors = (e) => {
    setColorValues(e.value)
  }

  const [color, setColor] = useState(
    true
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setHourRatio(setHour())
      setMinuteRatio(setMinute())
      setSecondRatio(setSecond())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const currentColor = `${colorValues}`

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.clockContainer}>
          <AnalogClockContainer>
            <ClockCenter />
            <Clock currentColor={currentColor}>
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
                    { translateY: 60 },
                    //MinuteHand moves left as value is lowered
                    { translateX: 10 },
                    { rotate: `${minuteRatio * 360}deg` },
                    { translateY: -70 },
                    { translateX: 5 },
                  ],
                }}
              />
              <HourHand
                style={{
                  transform: [
                    //HourHand moves up as value is lowered
                    { translateY: 80 },
                    //HourHand moves left as value is lowered
                    { translateX: -5 },
                    { rotate: `${hourRatio * 360}deg` },
                    { translateY: -60 },
                    //moves left as value is lowered
                    { translateX: 0 },
                  ],
                }}
              />
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "30deg" }],
                }}
              >
                <ClockNumberFont>1</ClockNumberFont>
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
                <ClockNumberFont>3</ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "120deg" }],
                }}
              >
                <ClockNumberFont>4</ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "150deg" }],
                }}
              >
                <ClockNumberFont>5</ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "180deg" }],
                }}
              >
                <ClockNumberFont>6</ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "210deg" }],
                }}
              >
                <ClockNumberFont>7</ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "240deg" }],
                }}
              >
                <ClockNumberFont>8</ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "270deg" }],
                }}
              >
                <ClockNumberFont>9</ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "300deg" }],
                }}
              >
                <ClockNumberFont>10</ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "330deg" }],
                }}
              >
                <ClockNumberFont>11</ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: "360deg" }],
                }}
              >
                <ClockNumberFont>12</ClockNumberFont>
              </ClockNumberContainer>
            </Clock>
          </AnalogClockContainer>
        </View>
        <View style={styles.menu}>
          <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
              <Modal
                animationType={"slide"}
                onBackdropPress={() => setShowModal(false)}
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                  console.log("Modal has been closed.")
                }}
              >
                {/*All views of Modal*/}
                {/*Animation can be slide, slide, none*/}
                <View style={styles.modalPopUp}>
                  <View style={styles.buttonsContainer}>
                    {colorValues.map((color) => {
                      <MenuColorButton
                        customColor={color.value}
                        onPress={handleColors}
                        style={colorValues}
                      />
                    })}
                    <TouchableOpacity
                      onPress={() => {
                        setShowModal(!showModal)
                      }}
                    ></TouchableOpacity>
                  </View>
                </View>
              </Modal>
              {/*Updating the state to make Modal Visible*/}
              <Ionicons
                name="color-palette-sharp"
                size={24}
                color="black"
                onPress={() => {
                  setShowModal(!showModal)
                }}
              ></Ionicons>
            </View>
          </SafeAreaView>
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
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    height: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    width: "30%",
  },
  modalPopUp: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 680,
    marginRight: 10,
    marginBottom: 100,
    marginLeft: 10,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    color: "#3f2949",
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})

export default AnalogClock;