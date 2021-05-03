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

import { Ionicons } from '@expo/vector-icons';

const AlarmModal = ({ iconName, iconColor, onAlarmHandle }) => {
  const [showModal, setShowModal] = useState(false);

   const [inputTime, setInputTime] = useState(0);
 
 const handleInput = (event) => {
   setInputTime(event.target.value);
 };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          onBackdropPress={() => setShowModal(false)}
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}
        >
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modalPopUp}>
            <View style={styles.buttonsContainer}>
              <GenericButton
                backgroundColor="transparent"
                color="black"
                borderRadius="1px"
                borderWidth="0px"
                width="40px"
                height="40px"
                value="+"
                fontFamily="audiowide"
                onChange={handleInput}
                onPress={() => onAlarmHandle(inputTime)}
              />
              <GenericButton
                backgroundColor="transparent"
                color="black"
                borderRadius="1px"
                borderWidth="0px"
                width="40px"
                height="40px"
                value="Edit"
                fontFamily="audiowide"
                onChange={handleInput}
                onPress={() => onAlarmHandle(inputTime)}
              ></GenericButton>
            </View>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
              }}
            ></TouchableOpacity>
          </View>
        </Modal>
        {/*Updating the state to make Modal Visible*/}
        <Ionicons
          name={iconName}
          size={24}
          color={iconColor}
          onPress={() => {
            setShowModal(!showModal);
          }}
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
});

export default AlarmModal;
