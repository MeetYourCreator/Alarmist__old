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
            name: 'Edit Alarm Screen Main',
            params: { repeat: dayOfWeek },
            merge: true,
          });
        }}
        dayOfWeek={value}
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
