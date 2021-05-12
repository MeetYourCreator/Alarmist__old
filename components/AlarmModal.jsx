import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import GenericButton from './GenericButton.jsx';
import AppButton from './AppButton.jsx'
import Input from './Input.jsx';
import EditAlarmScreenMain from '../screens/EditAlarmScreenMain.jsx';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AlarmModal = ({ iconName, iconColor }) => {
  
const navigation = useNavigation(); 
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Ionicons
          name={iconName}
          size={24}
          color={iconColor}
          onPress={() => navigation.navigate('Edit Alarm Screen Main')}
        ></Ionicons>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    height: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    width: '30%',
  },
  
});

export default AlarmModal;
