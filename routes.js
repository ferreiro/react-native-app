import React from 'react'
import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import {StyleSheet, Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {MaterialIcons} from '@expo/vector-icons'

import ConnectedDashboard from './redux/containers/ConnectedDashboard';
import ConnectedCreateDeck from './redux/containers/ConnectedCreateDeck';
import ConnectedDeckDetails from './redux/containers/ConnectedDeckDetails';
import ConnectedCreateCard from './redux/containers/ConnectedCreateCard';
import ConnectedQuiz from './redux/containers/ConnectedQuiz';

const DashboardStack = createStackNavigator({
  Home: {
    screen: ConnectedDashboard
  },
  // TODO: Split this up into it's own stack... 
  DeckDetails: {
    screen: ConnectedDeckDetails
  },
  CreateCard: {
    screen: ConnectedCreateCard
  },
  Quiz: {
    screen: ConnectedQuiz,
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
    screen: ConnectedCreateDeck
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

const mainAppNavigation = {
  Home: {
    screen: DashboardStack,
    navigationOptions: {
      tabBarLabel: 'Dashboard',
      tabBarIcon: <MaterialIcons name="dashboard" size={30} color={'#000'} />
    },
  },
  CreateDeck: {
    screen: CreateDeckStack,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: <MaterialIcons name="dashboard" size={30} color={'#000'} />
    }
  }
}

const AppNavigator = Platform.OS === 'ios' ? (
  createBottomTabNavigator(mainAppNavigation)
) : (
  createMaterialBottomTabNavigator(mainAppNavigation)
)

export const AppContainer = createAppContainer(AppNavigator)
