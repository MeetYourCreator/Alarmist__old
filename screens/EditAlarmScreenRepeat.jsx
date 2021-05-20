import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CheckSelectRadioButton from '../components/buttons/CheckSelectRadioButton.jsx';

const EditAlarmScreenRepeat = ({ navigation, value }) => {
  const [dayOfWeek, setDayOfWeek] = useState('');
  return (
    <View style={styles.radioButtonsContainer}>
      <CheckSelectRadioButton
        onPress={() => {
          navigation.navigate({
            name: 'Edit Alarm Screen Name',
            params: { repeat: dayOfWeek },
            merge: true,
          });
        }}
        dayOfWeek={value}
        day="Monday"
      ></CheckSelectRadioButton>
      <CheckSelectRadioButton day="Tuesday"></CheckSelectRadioButton>
      <CheckSelectRadioButton day="Wednesday"></CheckSelectRadioButton>
      <CheckSelectRadioButton day="Thursday"></CheckSelectRadioButton>
      <CheckSelectRadioButton day="Friday"></CheckSelectRadioButton>
      <CheckSelectRadioButton day="Saturday"></CheckSelectRadioButton>
      <CheckSelectRadioButton day="Sunday"></CheckSelectRadioButton>
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
