import React, { useEffect } from "react"
import {
  Button,
  TouchableOpacity,
  Text,
  Modal,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native"
import AppButton from "../components/AppButton.jsx"
import styled from "styled-components"
import Menu from "../components/shared/Menu.jsx"
import * as Notifications from "expo-notifications"
import * as Permissions from "expo-permissions"

const HomeScreen = ({ navigation }) => {
  //Permissions needed for ios
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS)
        }
        return statusObj
      })
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return
        }
      })
  }, [])

  //handle Notifications if App is running
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        alert(notification)
      }
    );

    return () => {
      subscription.remove()
    }
  }, [])

  const triggerNotificationsHandler = () => {
    //create a Local Notification
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Notification Test",
        body: "Testing Local Notification",
      },
      trigger: {
        seconds: 10,
      },
    })
  }

  return (
    <>
       <SafeAreaView style={styles.screenContainer}>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Trigger Notifications"
            onPress={triggerNotificationsHandler}
          ></AppButton>
          <AppButton
            title="12 Hour Alarmist"
            onPress={() => navigation.navigate("Analog Clock")}
          ></AppButton>
          <AppButton
            title="24 Hour Alarmist"
            onPress={() => navigation.navigate("Digital Local Clock")}
          ></AppButton>
          {/* <AppButton
          title="World Alarmist"
          onPress={() => navigation.navigate("Digital World Clock")}
        ></AppButton> */}
        </View>
        <Menu title="Menu"></Menu>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
})
export default HomeScreen
