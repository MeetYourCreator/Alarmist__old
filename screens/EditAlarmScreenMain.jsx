import React, {useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import GenericButton from '../components/buttons/GenericButton.jsx';
import EditAlarmDetail from '../components/EditAlarmDetail.jsx';

const EditAlarmScreenMain = () => {
  
  const [inputValue, setInputValue] = useState('')

  const inputHandler = event => {
  setInputValue(event)
  }


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
          onInputHandle={inputHandler}
        >{inputValue}</EditAlarmDetail>
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
