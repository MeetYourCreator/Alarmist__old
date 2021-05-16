import React from 'react';
import { NativeModules } from 'react-native';
import {
  TouchableOpacity,
  View,
  SafeView,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditAlarmDetail = ({ name, value, screen }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate(screen)}
      >
        <Text style={styles.left}>{name}</Text>

        <Text style={styles.right}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'rgba(180,180,180,.8)',
    width: '100%',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 10,
    color: 'black',
    fontWeight: '800',
  },
  right: {
    color: 'black',
  },
});
export default EditAlarmDetail;