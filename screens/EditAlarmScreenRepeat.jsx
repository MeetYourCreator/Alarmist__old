import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckSelectRadioButton from '../components/buttons/CheckSelectRadioButton.jsx';

const EditAlarmScreenRepeat = ({ navigation, value }) => {
  const [dayOfWeek, setDayOfWeek] = useState({ value: value });
  const [isChecked, setIsChecked] = useState(true);
  console.log('EditAlarmScreenRepeat');

  //VIEW
  return (
    <View style={styles.radioButtonsContainer}>
      <CheckSelectRadioButton
        onPress={() => {
          navigation.navigate({
            name: 'Edit Alarm Screen Main',
            params: { repeat: dayOfWeek },
            merge: true,
          });
        }}
        value="Monday"
      ></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Tuesday"></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Wednesday"></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Thursday"></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Friday"></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Saturday"></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Sunday"></CheckSelectRadioButton>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default EditAlarmScreenRepeat;