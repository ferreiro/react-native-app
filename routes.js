import React from 'react'
import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {MaterialIcons, Ionicons} from '@expo/vector-icons'

import ConnectedDashboard from './redux/containers/ConnectedDashboard';
import ConnectedCreateDeck from './redux/containers/ConnectedCreateDeck';
import ConnectedDeckDetails from './redux/containers/ConnectedDeckDetails';
import ConnectedCreateCard from './redux/containers/ConnectedCreateCard';
import ConnectedQuiz from './redux/containers/ConnectedQuiz';

const DashboardStack = createStackNavigator({
  Home: {
    screen: ConnectedDashboard
  },
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
      tabBarIcon: ({tintColor}) => (
        Platform.OS === 'ios' ? (
          <Ionicons name="md-home" size={28} color={tintColor} />
        ) : (
          <MaterialIcons name="dashboard" size={28} color={tintColor} />
        )
      )
    },
  },
  CreateDeck: {
    screen: CreateDeckStack,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: ({tintColor, inactiveTintColor}) => (
        Platform.OS === 'ios' ? (
          <Ionicons name="ios-add-circle-outline" size={28} color={tintColor} />
        ) : (
          <MaterialIcons name="add" size={28} color={tintColor} />
        )
      )
    }
  }
}

const AppNavigator = Platform.OS === 'ios' ? (
  createBottomTabNavigator(mainAppNavigation, {tabBarOptions: {activeTintColor: '#dc1c5f'}})
) : (
  createMaterialBottomTabNavigator(mainAppNavigation, {tabBarOptions: {activeTintColor: '#dc1c5f'}})
)

export const AppContainer = createAppContainer(AppNavigator)
