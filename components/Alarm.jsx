import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import AlarmBeep from '../assets/sounds/alarm-beep.mp3';

const Alarm = () => {
 

  const alarmSound = { AlarmBeep };

  

  return (
    <>
      <View>
        <TextInput type='number' value={inputTime} onChange={handleInput}></TextInput>
      </View>
    </>
  );
};

export default Alarm;