import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { setHour, setMinute, setSecond } from '../services/time.js';
import { AnalogClockContainer } from '../components/styled/analog/AnalogClockContainer.js';
import { Clock } from '../components/styled/analog/Clock.js';
import { SecondHand } from '../components/styled/analog/SecondHand.js';
import { MinuteHand } from '../components/styled/analog/MinuteHand.js';
import { HourHand } from '../components/styled/analog/HourHand.js';
import { ClockNumberContainer } from '../components/styled/analog/ClockNumberContainer.js';
import { ClockNumberFont } from '../components/styled/analog/ClockNumberFont.js';
import { ClockCenter } from '../components/styled/analog/ClockCenter.js';
import AnalogClockFaceModal from '../components/modals/AnalogClockFaceModal.jsx';
import AnalogClockNumberModal from '../components/modals/AnalogClockNumberModal.jsx';
import AlarmModal from '../components/modals/AlarmModal.jsx';

const AnalogClock = () => {
  const [hourRatio, setHourRatio] = useState(setHour());
  const [minuteRatio, setMinuteRatio] = useState(setMinute());
  const [secondRatio, setSecondRatio] = useState(setSecond());
  const [colorValue, setColorValue] = useState('#F1B814');
  const [fontValue, setcurrentFont] = useState('diplomatica');

  let colorHandler = (event) => {
    setColorValue(event);
  };

  let fontHandler = (event) => {
    setcurrentFont(event);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHourRatio(setHour());
      setMinuteRatio(setMinute());
      setSecondRatio(setSecond());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentColor = colorValue;
  const currentFont = fontValue;

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.clockContainer}>
          <AnalogClockContainer>
            <ClockCenter />
            <Clock
              style={[styles.clockFace, { backgroundColor: currentColor }]}
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
                    { translateY: 70 },
                    //MinuteHand moves left as value is lowered
                    { translateX: 30 },
                    { rotate: `${minuteRatio * 360}deg` },
                    { translateY: -70 },
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
                  transform: [{ rotate: '30deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  1
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '60deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  2
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '90deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  3
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '120deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  4
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '150deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  5
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '180deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  6
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '210deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  7
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '240deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  8
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '270deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  9
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '300deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  10
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '330deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  11
                </ClockNumberFont>
              </ClockNumberContainer>
              <ClockNumberContainer
                style={{
                  transform: [{ rotate: '360deg' }],
                }}
              >
                <ClockNumberFont
                  style={[styles.clockNumber, { fontFamily: currentFont }]}
                >
                  12
                </ClockNumberFont>
              </ClockNumberContainer>
            </Clock>
          </AnalogClockContainer>
        </View>
        <View style={styles.menu}>
          <AnalogClockFaceModal
            iconName="color-palette-sharp"
            iconColor="black"
            onColorHandle={colorHandler}
          ></AnalogClockFaceModal>
          <AnalogClockNumberModal
            iconName="language"
            iconColor="black"
            onFontHandle={fontHandler}
          ></AnalogClockNumberModal>
          <AlarmModal iconName="alarm" iconColor="black"></AlarmModal>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  clockContainer: {
    flex: 1,
    marginTop: 180,
    marginBottom: 90,
  },
  clockFace: {
    borderColor: '#162B32',
    borderWidth: 5,
    borderRadius: 170,
    width: 325,
    height: 325,
    position: 'relative',
  },
  clockNumber: {
    textAlign: 'center',
    fontSize: 27,
    marginTop: 10,
    color: '#162B32',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    padding: 0,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default AnalogClock;
