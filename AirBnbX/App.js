/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import NextCustomer from '././screens/NextCustomer';
import Bookings from '././screens/Bookings';
import MyCalendar from '././screens/MyCalendar';
import Portfolio from '././screens/Portfolio';
import Profile from '././screens/Profile';


export default createBottomTabNavigator({
  NextCustomer: {
    screen: NextCustomer,
    navigationOptions: {
      tabBarLabel: 'Next',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require("./assets/NextCustomer.png")} style={{ height: 24,
        width: 24, tintColor: tintColor }}/>
      )
    }
  },
  Bookings: {
    screen: Bookings,
    navigationOptions: {
      tabBarLabel: 'Bookings',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require("./assets/Bookings.png")} style={{ height: 24,
        width: 24, tintColor: tintColor }}/>
      )
    }
  },
  MyCalendar: {
    screen: MyCalendar,
    navigationOptions: {
      tabBarLabel: 'Calendar',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require("./assets/Calendar.png")} style={{ height: 24,
        width: 24, tintColor: tintColor }}/>
      )
    }
  },
  Portfolio: {
    screen: Portfolio,
    navigationOptions: {
      tabBarLabel: 'Portfolio',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require("./assets/Portfolio.png")} style={{ height: 24,
        width: 24, tintColor: tintColor }}/>
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require("./assets/Profile.png")} style={{ height: 24,
        width: 24, tintColor: tintColor }}/>
      )
    }
  }
}, {
      tabBarOptions: {
        activeTintColor: 'rgb(240, 143, 119)',
        inactiveTintColor: 'rgb(129, 144, 165)',
        style: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 5
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
