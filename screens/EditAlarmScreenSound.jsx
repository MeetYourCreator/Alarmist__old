import React from 'react';
import { View, SafeView, StyleSheet, Text } from 'react-native';
import CheckSelectRadioButton from '../components/buttons/CheckSelectRadioButton.jsx'
import EditAlarmDetail from '../components/EditAlarmDetail.jsx';

const EditAlarmScreenSound = () => {
   return (
    <View style={styles.radioButtonsContainer}>
      {/* <CheckSelectRadioButton
        onPress={() => {
          navigation.navigate({
            name: 'Edit Alarm Screen Main',
            params: { repeat: dayOfWeek },
            merge: true,
          });
        }}
        value="Monday"
      ></CheckSelectRadioButton> */}
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

export default EditAlarmScreenSound;
