import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,
        TouchableOpacity, ImageBackground,
        TextInput, Animated, Dimensions,
        Keyboard, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Icon} from 'native-base';
const SCREEN_HEIGHT = Dimensions.get('window').height




class RegisterStart extends Component {

static navigationOptions = {
    header: null
}



componentWillMount() {
    this.loginHeight = new Animated.Value(180)

}

increaseHeightOfLogin = () => {

    Animated.timing(this.loginHeight, {
        toValue: SCREEN_HEIGHT,
        duration: 500
    }).start(() => {
        this.refs.textInputMobile.focus()
    })
}

decreaseHeightOfLogin = () => {
    Animated.timing(this.loginHeight, {
        toValue: 180,
        duration: 500
    }).start()
}

  render(){

      const headerTextOpacity = this.loginHeight.interpolate({
          inputRange: [180, SCREEN_HEIGHT],
          outputRange: [1, 0]
      })
      const marginTop = this.loginHeight.interpolate({
          inputRange: [180, SCREEN_HEIGHT],
          outputRange: [25, 100]
      })
    /*  const headerBackArrowOpacity = this.loginHeight.interpolate({
          inputRange: [180, SCREEN_HEIGHT],
          outputRange: [0, 1]
      })*/


  return (

    <View style={{flex: 1, display: 'flex', alignSelf: 'stretch'}}>



        <ImageBackground
            source={require('../assets/ScisserRegisterBackgroundImage.png')}
            style={{ flex: 1 }}
        >

            <Animatable.View
                animation='zoomIn' iterationCOunt={1}
                style={{ flex: 1, justifyContent: 'center',
                alignItems: 'center' }}>
                    <View style={{ alignItems: 'center',
                    justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/ScisserLogo.png')}
                            style={{ height: 200, alignSelf: 'stretch', resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{ alignSelf: 'stretch',
                    alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 34, color: 'rgb(240, 143, 119)' }}>
                            SCISSER
                        </Text>
                    </View>
            </Animatable.View>

            {/** BOTTOM HALF**/}
            <Animatable.View animation='slideInUp' iterationCount={1}>

                <Animated.View style={{ height: this.loginHeight, backgroundColor: 'white' }}>

                    <Animated.View style={{ opacity: headerTextOpacity, alignItems: 'flex-start',
                    paddingHorizontal: 25, marginTop: marginTop /**Animated**/}}>
                        <Text style={{ fontSize: 24 }}>
                            Get started with Scisser
                        </Text>
                    </Animated.View>

                    <View style={{ alignSelf: 'stretch', height: 40 }}>
                        <Text style={{ paddingHorizontal: 10, fontSize: 16,
                        fontWeight: 'bold', color: '#e8e8ec', marginTop: 20 }}>
                            Choose an account to connect
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{ marginTop: 10, backgroundColor: 'white', height: 40,
                        alignSelf: 'stretch', flexDirection: 'row', borderTopWidth: 1,
                        borderTopColor: '#e8e8ec', justifyContent: 'space-between' }}
                        activeOpacity={0.6}
                        onPress= {() => {
                            this.props.setRegProgress(1);
                            this.props.setFacebookLogin(true);
                            this.props.setGoogleLogin(false);
                        }}
                    >
                        <View style={{
                        paddingHorizontal: 25, flexDirection: 'row', alignItems: 'center' }}>

                        <Image
                            source={require('../assets/FacebookLogo.png')}
                            style={{ height: 30, width: 30, resizeMode: 'contain' }}
                        />

                        <Text style={{ fontSize: 14, paddingHorizontal: 20 }}>
                            Facebook
                        </Text>
                        </View>

                        <View style={{ marginRight: 20, height: 40, width: 40, alignItems: 'center',
                        justifyContent: 'center' }}>
                        <Image
                            source={require("../assets/ArrowRight.png")}
                            style={{ height: 16, width: 16, resizeMode: 'contain', tintColor: 'black' }}
                        />
                        </View>


                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ backgroundColor: 'white', height: 40,
                        alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center',
                        borderTopWidth: 1, borderTopColor: '#e8e8ec', borderBottomWidth: 1,
                        borderBottomColor: '#e8e8ec', justifyContent: 'space-between' }}
                        activeOpacity={0.6}
                        onPress= {() => {
                            this.props.setRegProgress(1);
                            this.props.setGoogleLogin(true);
                            this.props.setFacebookLogin(false);
                        }}


                    >

                        <View style={{
                        paddingHorizontal: 25, flexDirection: 'row', alignItems: 'center' }}>

                        <Image
                            source={require('../assets/GoogleLogo.png')}
                            style={{ height: 30, width: 30, resizeMode: 'contain' }}
                        />

                        <Text style={{ fontSize: 14, paddingHorizontal: 20, }}>
                            Google
                        </Text>
                    </View>
                    <View style={{ marginRight: 20, height: 40, width: 40, alignItems: 'center',
                    justifyContent: 'center' }}>
                    <Image
                        source={require("../assets/ArrowRight.png")}
                        style={{ height: 16, width: 16, resizeMode: 'contain', tintColor: 'black' }}
                    />
                    </View>

                    </TouchableOpacity>
                </Animated.View>
{/*This is comment*/}

            </Animatable.View>
        </ImageBackground>
    </View>
  );
}

}


export default RegisterStart;
