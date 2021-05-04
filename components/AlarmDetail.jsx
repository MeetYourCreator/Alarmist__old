import React from 'react';
import { TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';

const AlarmDetail = () => {
  return (
  
    <>
      <div style={styles.alarmDetailContainer}>
        <h1>Hello</h1>
      </div>
    </>
  )
};

const styles = StyleSheet.create({
  alarmDetailContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',

  }
})

export default AlarmDetail;