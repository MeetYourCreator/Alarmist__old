import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from './CheckBox.jsx'

const CheckSelectRadioButton = ({ day }) => {
  
  return (
    <>
      <View style={styles.radioButtonWrapper}>
        <Text>{day}</Text>
        <CheckBox />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  radioButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#bebebe',
  },
});

export default CheckSelectRadioButton;
