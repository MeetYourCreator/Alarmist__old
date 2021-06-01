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
      <CheckSelectRadioButton value="Sound 2"></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Sound 3"></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Sound 4"></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Sound 5"></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Sound 6"></CheckSelectRadioButton>
      <CheckSelectRadioButton value="Sound 7"></CheckSelectRadioButton>
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
