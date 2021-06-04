import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

const AlarmDetail = ({minute, hour}) => {
  return (
    <>
      <View style={styles.alarmContainer}>
        <TextInput
          hour={hour}
          style={styles.hour}
          keyboardType="numeric"
          maxLength={2}
        ></TextInput>
        <TextInput
          minute={minute}
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
