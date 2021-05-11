import React from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import GenericButton from '../components/GenericButton.jsx'
import EditAlarmDetailButton from '../components/EditAlarmDetailButton.jsx'
import AppButton from '../components/AppButton.jsx'

const EditAlarmScreen = () => {
  return (
    <View style={styles.alarmDetailContainer}>
      <View style={styles.topButtonsContainer}>
        <GenericButton
          backgroundColor="transparent"
          color="black"
          borderRadius="1px"
          borderWidth="0px"
          width="60px"
          height="40px"
          value="Cancel"
          fontFamily="audiowide"
        />
        <GenericButton
          backgroundColor="transparent"
          color="black"
          borderRadius="1px"
          borderWidth="0px"
          width="40px"
          height="40px"
          value="Save"
          fontFamily="audiowide"
        ></GenericButton>
      </View>
      <View>
        <AppButton></AppButton>
       <EditAlarmDetailButton name='Repeat'></EditAlarmDetailButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alarmDetailContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(192,192,192,.3)',
    marginTop: 30,
    marginBottom: 100,
    borderWidth: 5,
    borderColor: 'black',
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'black',
  },
  input: {
  width: 100
  },
});

export default EditAlarmScreen;