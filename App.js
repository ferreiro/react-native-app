import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';

import {Dashboard} from './components/Dashboard';
import {DeckDetails} from './components/DeckDetails';
import {CreateCard} from './components/CreateCard';
import {CreateDeck} from './components/CreateDeck';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dashboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
