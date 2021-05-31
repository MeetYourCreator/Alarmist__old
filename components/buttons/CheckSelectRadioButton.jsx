import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from './CheckBox.jsx'

const CheckSelectRadioButton = ({ value }) => {
  
  return (
    <>
      <View style={styles.radioButtonWrapper}>
        <Text style={styles.text}>{value}</Text>
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
    backgroundColor: 'rgba(90,168,219,.8)',
  },
  text: {
    color: 'rgb(255,255,255)',
    fontWeight: '800',
  },
});

export default CheckSelectRadioButton;
