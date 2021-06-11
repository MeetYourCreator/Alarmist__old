import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import AlarmTime from './AlarmTime.jsx';

const AlarmDetail = () => {
  return (
    <>
      <View>
        <AlarmTime />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  alarmContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
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
