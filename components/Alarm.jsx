import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import AlarmBeep from '../assets/sounds/alarm-beep.mp3';

const Alarm = () => {
  const [inputTime, setInputTime] = useState('')

  const alarmSound = new Audio();
  alarmSound.src = {AlarmBeep};


};

export default Alarm;