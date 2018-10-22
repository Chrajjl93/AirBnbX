import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class GoogleLogin extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>GoogleLogin</Text>

        <TouchableOpacity
            style={{ width: 80, height: 40, borderRadius: 5,
            borderWidth: 2, borderColor: 'rgb(240, 143, 119)',
            alignItems: 'center', justifyContent: 'center' }}
            onPress= {() => this.props.setRegProgress(2)}
        >
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'rgb(240, 143, 119)'}}>
                Login
            </Text>

        </TouchableOpacity>
      </View>
    );
  }
}

export default GoogleLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(219, 221, 222)'
  }
 });
