import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CheckBox = () => {
  const [checked, onChange] = useState(false);

  const onCheckmarkPress = () => {
    onChange(!checked);
  };

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}
    >
      {checked && (
        <Ionicons
          name="checkmark"
          size={27}
          color="#f50035"
          fontWeight="bold"
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 27,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'transparent',
    marginBottom: 3,
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    color: 'blue',
    backgroundColor: 'transparent',
  },
});
export default CheckBox;
