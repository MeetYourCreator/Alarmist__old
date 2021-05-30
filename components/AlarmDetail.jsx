import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';


const AlarmDetail = ({sound, repeat, label, snooze}) => {
 
  return (
    <>
      <View>
        <TextInput type='number' value={inputTime} onChange={handleInput}></TextInput>
      </View>
    </>
  );
};

export default Alarm;