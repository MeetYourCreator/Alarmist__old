import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

const AlarmDetail = () => {
  return (
    <>
      <View style={styles.alarmContainer}>
        <TextInput
          style={styles.hour}
          keyboardType="numeric"
          maxLength={2}
        ></TextInput>
        <TextInput
          style={styles.minute}
          keyboardType="numeric"
          maxLength={2}
          // value={inputTime}
          // onChange={handleInput}
        ></TextInput>
      </View>
    </>
  );
};

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

export default AlarmDetail;
