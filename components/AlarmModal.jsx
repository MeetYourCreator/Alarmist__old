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
import AlarmDetail from '../screens/AlarmDetailScreen.jsx';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AlarmModal = ({ iconName, iconColor, onAlarmHandle }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAlarm, setShowAlarm] = useState();

  const handleInput = (event) => {
    setInputTime(event.target.value);
  };
const navigation = useNavigation(); 
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Ionicons
          name={iconName}
          size={24}
          color={iconColor}
          onPress={() => navigation.navigate('Alarm Detail Screen')}
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
  modalPopUp: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(192,192,192,.7)',
    marginTop: 100,
    marginBottom: 100,
    borderWidth: 5,
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
  
  }
});

export default AlarmModal;
