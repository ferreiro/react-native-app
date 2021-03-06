import React from 'react'
import {AsyncStorage } from 'react-native'
import {Notifications, Permissions} from 'expo'

// Code from Udacity local notification

const NOTIFICATION_KEY = 'Udacity:notifications'

export const clearLocalNotification = () => (
  AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
)

const createNotification = () => {
  return {
    title: 'Do your exercise!',
    body: "Don't forget to do your exercises today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export const setLocalNotification = (time) => {
  const notificationOptions = {
    time,
    repeat: 'day',
  }

  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                notificationOptions
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}