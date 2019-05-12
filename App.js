import React, {PureComponent} from 'react';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import {MaterialIcons} from '@expo/vector-icons'

import {Dashboard} from './components/Dashboard';
import {DeckDetails} from './components/DeckDetails';
import {CreateCard} from './components/CreateCard';
import {CreateDeck} from './components/CreateDeck';

const DashboardStack = createStackNavigator({
  Home: {
    screen: Dashboard
  },
  // TODO: Split this up into it's own stack... 
  DeckDetails: {
    screen: DeckDetails
  },
  CreateCard: {
    screen: CreateCard
  }
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#dc1c5f',
    },
  },
})

const CreateDeckStack = createStackNavigator({
  CreateDeck: {
    screen: CreateDeck
  }
}, {
  initialRouteName: "CreateDeck",
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#dc1c5f',
    },
  },
})

const AppNavigator = Platform.OS === 'ios' ? (
  createBottomTabNavigator({
    Home: {
      screen: DashboardStack,
      tabBarIcon: <MaterialIcons name="dashboard" size={10} color={'#000'} />
    },
    CreateDeck: CreateDeckStack
  })
) : (
  createMaterialBottomTabNavigator({
    Home: { screen: DashboardStack },
    CreateDeck: { screen: CreateDeckStack }
  })
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends PureComponent {
  render() {
    return (
      <AppContainer style={styles.container} />
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
});
