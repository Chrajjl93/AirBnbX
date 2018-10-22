import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,
        TouchableOpacity, ImageBackground,
        TextInput, Animated, Dimensions,
        Keyboard, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Icon} from 'native-base';
import RegisterStart from './RegisterStart.js'
import FacebookLogin from './FacebookLogin.js'
import GoogleLogin from './GoogleLogin.js'
import RegisterType from './RegisterType.js'
const SCREEN_HEIGHT = Dimensions.get('window').height




class Profile extends Component {

static navigationOptions = {
    header: null
}

constructor(){
    super()

    this.state = {
        regPro: 0,
        fbLogin: false,
        googleLogin: false,
    }


}

setRegProgress = (regPro) => {
    this.setState({
        regPro: regPro,
    })
}

setFacebookLogin = (fbLogin) => {
    this.setState({
        fbLogin: fbLogin,
    })
}

setGoogleLogin = (googleLogin) => {
    this.setState({
        googleLogin: googleLogin,
    })
}


componentWillMount() {
    this.loginHeight = new Animated.Value(180)
}

  render(){

  return (

      <View style={{flex: 1}}>
         {this.state.regPro === 0
          &&
          <RegisterStart setRegProgress={this.setRegProgress} setFacebookLogin={this.setFacebookLogin} setGoogleLogin={this.setGoogleLogin}/>
          ||
          this.state.regPro === 1 && this.state.fbLogin === true
          &&
          <FacebookLogin setRegProgress={this.setRegProgress}/>
          ||
          this.state.regPro === 1 && this.state.googleLogin === true
          &&
          <GoogleLogin setRegProgress={this.setRegProgress}/>
          ||
          this.state.regPro === 2
          &&
          <RegisterType setRegProgress={this.setRegProgress}/>
          }
      </View>



  );
}

}


export default Profile;
