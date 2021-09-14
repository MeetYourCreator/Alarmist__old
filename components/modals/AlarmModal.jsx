import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../redux/store.js';

import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import GenericButton from '../buttons/GenericButton.jsx';
import AppButton from '../buttons/AppButton.jsx';
import Input from '../alarm/Input.jsx';
import EditAlarmScreenMain from '../../screens/EditAlarmScreenMain.jsx';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AlarmModal = ({ iconName, iconColor }) => {
  const state = useSelector((state) => state.alarms);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Ionicons
          name={iconName}
          size={24}
          color={iconColor}
          onPress={() => {
            store.dispatch({
              type: 'CREATE_ALARM',
            });
            navigation.navigate('Edit Alarm Screen Main');
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
});

export default AlarmModal;
