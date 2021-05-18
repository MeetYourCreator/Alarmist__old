import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const CheckSelectRadioButton = ({day}) => {
  
return (
 <>
    <TouchableOpacity style={styles.radioButtonWrapper} onPress={() => {}}>
      <Text>{day}</Text>
      <Ionicons name="checkmark-outline" size={24} color="black"></Ionicons>
    </TouchableOpacity>
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
    backgroundColor: 'rgba(180,180,180,.8)',
 
  },
});

export default CheckSelectRadioButton;