import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CheckSelectRadioButton from '../components/buttons/CheckSelectRadioButton.jsx';

const EditAlarmScreenRepeat = ({ navigation, onInputHandle }) => {
  const [showCheck, setShowCheck] = useState(false);

  return (
    <View>
      <CheckSelectRadioButton />
    </View>
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
    marginTop: 300,
    marginBottom: 300,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'rgba(180,180,180,.8)',
    width: '100%',
  },
});

export default EditAlarmScreenRepeat;
