import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {setAlarm} from '../store/actions/alarmsActionsObjects.js'


import GenericButton from '../components/buttons/GenericButton.jsx';
import EditAlarmDetail from '../components/EditAlarmDetail.jsx';

const EditAlarmScreenMain = ({ value, navigation, route}) => {
  const [labelValue, setLabelValue] = useState('');
  const [repeatValue, setRepeatValue] = useState('');

  const availableAlarms = useSelector(state => state.alarms.alarms);
  // const alarmId = navigation.getParam('alarmId')

  const dispatch = useDispatch();

  // const setAlarmHandler = useCallback(() => {
  //   dispatch(setAlarm(alarmId))
  // }, [dispatch, alarmId])

  // useEffect(() => {
  // navigation.setParams({setAlarm: setAlarmHandler})
  // }, [setAlarmHandler])


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
          onPress={()=> {}}
        ></GenericButton>
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
