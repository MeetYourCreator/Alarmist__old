import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

const Alarm = () => {
  const [inputMilli, setInputMilli] = useState('');
  const [inputSec, setInputSec] = useState('');
  const [inputMin, setInputMin] = useState('');
  const [inputHour, setInputHour] = useState('');
};

export default Alarm;