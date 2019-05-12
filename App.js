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
import {createAppContainer, createStackNavigator} from 'react-navigation';

import {Dashboard} from './components/Dashboard';
import {DeckDetails} from './components/DeckDetails';
import {CreateCard} from './components/CreateCard';
import {CreateDeck} from './components/CreateDeck';

const router = {
  Home: {
    screen: Dashboard
  },
  CreateDeck: {
    screen: CreateDeck
  }
}
const options = {};
const AppNavigator = createStackNavigator(router, options)

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
