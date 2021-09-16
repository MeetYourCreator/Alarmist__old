import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import AlarmTime from '../components/alarm/AlarmTime.jsx';

//REDUX
import { useSelector, useDispatch } from 'react-redux';

import GenericButton from '../components/buttons/GenericButton.jsx';
import EditAlarmDetail from '../components/alarm/EditAlarmDetail.jsx';

const EditAlarmScreenMain = ({ value, navigation, route }) => {
  const [labelValue, setLabelValue] = useState('');
  const [repeatValue, setRepeatValue] = useState('');

  console.log('EditAlarmScreenMain');
  //REDUX
  //useSelector will give access to the alarmsReducer values for the alarms key in App.js line 22
  //Through the rootreducer in App. js lines 21-23, useSelector will get access to the initialState in ../store/reducers/alarms.js lines 6 - 10, and grab a hold of the ALARMS value for the alarms key in ../store/reducers/alarms.js line 7
  const availableAlarms = useSelector((state) => state.alarms.alarms);
  // const alarmId = navigation.getParam('alarmId')

  // const dispatch = useDispatch();

  // const setAlarmHandler = useCallback(() => {
  //   dispatch(setAlarm(alarmId))
  // }, [dispatch, alarmId])

  // useEffect(() => {
  // navigation.setParams({setAlarm: setAlarmHandler})
  // }, [setAlarmHandler])

  //NAVIGATION
  useEffect(() => {
    if (route.params?.label) {
      setLabelValue(labelValue);
    }
  }, [route.params?.label]);

  useEffect(() => {
    if (route.params?.repeat) {
      setRepeatValue(repeatValue);
    }
  });

  //VIEW
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
          fontSize="24px"
          fontWeight="800"
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
          fontSize="24px"
          fontWeight="700"
          onPress={() => {}}
        ></GenericButton>
      </View>
      <View style={styles.alarmTime}>
        <AlarmTime />
      </View>
      <View style={styles.alarmOptions}>
        <EditAlarmDetail
          name="Alarm Sound"
          value="Placeholder"
          screen="Edit Alarm Screen Sound"
        ></EditAlarmDetail>
        <EditAlarmDetail
          name="Alarm Repeat"
          value={route.params?.repeat}
          screen="Edit Alarm Screen Repeat"
        ></EditAlarmDetail>
        <EditAlarmDetail
          name="Alarm Label"
          value={route.params?.label}
          screen="Edit Alarm Screen Label"
        ></EditAlarmDetail>
        <EditAlarmDetail
          name="Alarm Snooze"
          value="Placeholder"
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
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,255,.8)',
  },
  topButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alarmTime: {
    marginRight: 'auto',
    marginBottom: 100,
    marginLeft: 'auto',
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