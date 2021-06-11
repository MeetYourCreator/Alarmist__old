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

EditAlarmDetail.navigationOptions = {
  headerStyle: {
    backgroundColor: 'rgb(235,105,158)',
  },
};
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'rgba(235,105,158,.3)',
    width: '100%',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: 'rgb(235,105,158)',
    fontWeight: '800',
  },
  right: {
    alignItems: 'flex-end',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    color: 'rgb(255,255,255)',
    fontWeight: '800',
  },
});
export default EditAlarmDetail;
