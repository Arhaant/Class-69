import React, { Component } from 'react';
import SearchScreen from './screens/SearchScreen'
import TransactionScreen from './screens/TransactionScreen'
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends Component {
  render(){
  return (
   <AppContainer/>
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


var AppNavigator = createBottomTabNavigator({
  Search : SearchScreen,
  Transaction : TransactionScreen
})

const AppContainer = createAppContainer(AppNavigator)
  