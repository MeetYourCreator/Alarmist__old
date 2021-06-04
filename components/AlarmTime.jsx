import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AlarmTime = ({minute, hour}) => {
  return (
    <>
      <View style={styles.alarmContainer}>
        <TextInput
          style={styles.hour}
          keyboardType="numeric"
          maxLength={2}
        >
          {hour}
        </TextInput>
        <TextInput
          style={styles.minute}
          keyboardType="numeric"
          maxLength={2}
          // value={inputTime}
          // onChange={handleInput}
        >
          {minute}
        </TextInput>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  alarmContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  alarmsTime: {
    flexDirection: 'row',
  },
  hour: {
    borderColor: 'red',
    width: 30,
    borderWidth: 3,
    backgroundColor: 'white',
  },
  minute: {
    borderColor: 'black',
    width: 30,
    borderWidth: 3,
    backgroundColor: 'white',
  },
});
export default AlarmTime;