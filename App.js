import React, {PureComponent} from 'react'
import {StyleSheet} from 'react-native'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {Notifications} from 'expo'

import {AppContainer} from './routes'
import rootReducer from './redux/reducers/index'
import {setLocalNotification} from './utils/helpers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class App extends PureComponent {
  componentDidMount() {
    setLocalNotification()
    this.listenForNotifications()
  }

  listenForNotifications = () => {
    Notifications.addListener(notification => {
      if (notification.origin === 'received' && Platform.OS === 'ios') {
        alert(notification.title, notification.body);
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer style={styles.container} />
      </Provider>
    )
  }
}
