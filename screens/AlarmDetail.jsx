import React from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet } from 'react-native';

const AlarmDetail = () => {
  return (
  
    <>
      <View style={styles.alarmDetailContainer}>
        <Text>Hello</Text>
      </View>
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