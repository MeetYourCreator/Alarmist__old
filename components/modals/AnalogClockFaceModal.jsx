import React, { useState } from 'react';
import { TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import MenuColorButton from '../buttons/MenuColorButton.jsx';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const AnalogClockFaceModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [_FF6495, set_FF6495] = useState('#FF6495');
  const [_78FFF1, set_78FFF1] = useState('#78FFF1');
  const [_361999, set_361999] = useState('#361999');
  const [_FF4838, set_FF4838] = useState('#FF4838');
  const [_F1B814, set_F1B814] = useState('#F1B814');
  const [_00ABE1, set_00ABE1] = useState('#00ABE1');
  const [_F7F7F7, set_F7F7F7] = useState('#F7F7F7');

  const handleSet_FF6495 = (_FF6495) => {
    set_FF6495(_F6495);
  };

  const handleSet_78FFF1 = (_78FFF1) => {
    set_78FFF1(_78FFF1);
  };

  const handleSet_361999 = (_361999) => {
    set_361999(_361999);
  };

  const handleSet_FF4838 = (_FF4838) => {
    set_FF4838(_FF4838);
  };

  const handleSet_F1B814 = (_F1B814) => {
    set_F1B814(_F1B814);
  };

  const handleSet_00ABE1 = (_00ABE1) => {
    set_00ABE1(_00ABE1);
  };

  const handleSet_F7F7F7 = (_F7F7F7) => {
    set_F7F7F7(_F7F7F7);
  };

  let { iconName, iconColor, onColorHandle } = props;

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
              <MenuColorButton
                customColor="#FF6495"
                onChange={handleSet_FF6495}
                onPress={() => onColorHandle(_FF6495)}
              />
              <MenuColorButton
                customColor="#78FFF1"
                onChange={handleSet_78FFF1}
                onPress={() => onColorHandle(_78FFF1)}
              />
              <MenuColorButton
                customColor="#361999"
                onChange={handleSet_361999}
                onPress={() => onColorHandle(_361999)}
              />
              <MenuColorButton
                customColor="#FF4838"
                onChange={handleSet_FF4838}
                onPress={() => onColorHandle(_FF4838)}
              />
              <MenuColorButton
                customColor="#F1B814"
                onChange={handleSet_F1B814}
                onPress={() => onColorHandle(_F1B814)}
              />
              <MenuColorButton
                customColor="#00ABE1"
                onChange={handleSet_00ABE1}
                onPress={() => onColorHandle(_00ABE1)}
              />
              <MenuColorButton
                customColor="#F7F7F7"
                onChange={handleSet_F7F7F7}
                onPress={() => onColorHandle(_F7F7F7)}
              />
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
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 650,
    marginRight: 10,
    marginBottom: 100,
    marginLeft: 10,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#3f2949',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default AnalogClockFaceModal;
