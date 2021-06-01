import React, { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import AppButton from '../components/buttons/AppButton.jsx';
import Colors from '../components/shared/Colors.js'

//NOTIFICATIONS
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const HomeScreen = ({ navigation }) => {
  //NOTIFICATIONS
  //Permissions needed for ios
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== 'granted') {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== 'granted') {
          return;
        }
      });
  }, []);

  //handle Notifications if App is running
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        alert(notification);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const triggerNotificationsHandler = () => {
    //create a Local Notification
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Notification Test',
        body: 'Testing Local Notification',
      },
      trigger: {
        seconds: 10,
      },
    });
  };

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.buttonContainer}>
          {/* <AppButton
            title="Trigger Notifications"
            onPress={triggerNotificationsHandler}
          ></AppButton> */}
          <AppButton
            color={Colors.yellow}
            title="12 Hour Alarmist"
            onPress={() => navigation.navigate('Analog Clock')}
          ></AppButton>
          <AppButton
            color={Colors.blue}
            title="24 Hour Alarmist"
            onPress={() => navigation.navigate('Digital Local Clock')}
          ></AppButton>
          {/* <AppButton
          title="World Alarmist"
          onPress={() => navigation.navigate("Digital World Clock")}
        ></AppButton> */}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  menu: {
 
    flexDirection: 'row',
  },
  screenContainer: {
    
    flexDirection: 'row',
    justifyContent: 'center',

  },
  buttonContainer: {

    flexDirection: 'row',

  },
});

export default HomeScreen;
