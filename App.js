import React, {PureComponent} from 'react'
import {StyleSheet} from 'react-native'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {AppContainer} from './routes'
import rootReducer from './redux/reducers/index'

const store = createStore(rootReducer)

export default class App extends PureComponent {
  render() {

    return (
      <Provider store={store}>
        <AppContainer style={styles.container} />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
