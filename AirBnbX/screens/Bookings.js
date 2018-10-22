import React, {Component} from 'react';
import {Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './Components/Bookings/Category'

const { height, width } = Dimensions.get('window')

class Bookings extends Component {

    componentWillMount(){
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    render(){
        return (
              <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white',
                      borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0},
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                         }}>
                            <Icon name="ios-search" size={ 20 } style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search Nearby"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700',
                                backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                    <ScrollView scrollEventThrottle={ 16 }>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700',
                            paddingHorizontal: 20 }}>
                                What can we help you find, Christian?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require( '../assets/MyHaircut.png' )} name="Christian" />
                                    <Category imageUri={require( '../assets/MyHaircut2.png' )} name="Henrik" />
                                    <Category imageUri={require( '../assets/MyHaircut3.png' )} name="Andreas" />

                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }} >
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of homes verified for
                                    quality & comfort
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20  }}>

                                    <Image style={{ flex: 1, width: null, height: null,
                                    resizeMode: 'cover', borderRadius: 5, borderWidth: 1,
                                    borderColor: '#dddddd' }}

                                        source={require('../assets/Home.jpg')}
                                    />

                                </View>

                            </View>
                        </View>
                    </ScrollView>
                </View>
              </SafeAreaView>
        );
    }
}

export default Bookings;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
});
