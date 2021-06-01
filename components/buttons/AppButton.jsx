import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const AppButton = ({ color, onPress, title }) => {
  return (
    <>
      <View style={styles.ScreenContainer}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.5}
          style={[styles.appButtonContainer, {backgroundColor: `${color}`}]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {

  },
  appButtonContainer: {
    height: '100%',
    width: '100%',
   
    borderRadius: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 0
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    
    padding: 20,
  },
});
export default AppButton;
