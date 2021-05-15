import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import GenericButton from '../components/GenericButton.jsx';
import EditAlarmDetail from '../components/EditAlarmDetail.jsx';
import AppButton from '../components/AppButton.jsx';

const EditAlarmScreenMain = () => {
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
      <View style={styles.alarmOptions}>
        <EditAlarmDetail
          name="Alarm Sound"
          screen="Edit Alarm Screen Sound"
        ></EditAlarmDetail>
        <EditAlarmDetail
          name="Alarm Repeat"
          screen="Edit Alarm Screen Repeat"
        ></EditAlarmDetail>
        <EditAlarmDetail
          name="Alarm Label"
          screen="Edit Alarm Screen Label"
        ></EditAlarmDetail>
        <EditAlarmDetail
          name="Alarm Snooze"
          screen="Edit Alarm Screen Snooze"
        ></EditAlarmDetail>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alarmOptions: {
    flex: 1,
    marginBottom: 300,
  },
  buttonText: {
    color: 'black',
  },
  input: {
    width: 100,
  },
});

export default EditAlarmScreenMain;
