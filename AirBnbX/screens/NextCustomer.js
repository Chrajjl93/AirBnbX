import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class NextCustomer extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>NextCustomer</Text>
      </View>
    );
  }
}

export default NextCustomer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
 })
