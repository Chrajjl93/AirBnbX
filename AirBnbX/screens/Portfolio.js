import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import Masonry from 'react-native-masonry';

class Portfolio extends Component {
  render(){
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ height: 40, justifyContent: 'center',
        alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
            <Text style={{
            fontWeight: '700',
            fontSize: 24
            }}>
                Portfolio
            </Text>
         </View>
         <View style={{ flex: 1, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
            <Masonry
                spacing={3}
                sorted={false} // optional - Default: false
                columns={2} // optional - Default: 2
                imageContainerStyle={{
                resizeMode: 'cover', borderRadius: 5, borderWidth: 1,
                borderColor: '#dddddd' }}
              bricks={[
                  { key: '4', uri: 'https://images.unsplash.com/photo-1520338661084-680395057c93?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4adc551f6ee66e05279aec6c1aaa471a&auto=format&fit=crop&w=800&q=60' },
                  { key: '2', uri: 'https://images.unsplash.com/photo-1521490878864-a50e9fcb5718?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd892d5713ec5a751ad4a80b6b25ea5f&auto=format&fit=crop&w=800&q=60' },
                  { key: '7', uri: 'https://images.unsplash.com/photo-1523532931495-f51ebf4bc3a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3b8b2043711ccd3eddad099463216d6d&auto=format&fit=crop&w=800&q=60' },
                  { key: '6', uri: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d6cde8cc87fc2947163be362be137b3d&auto=format&fit=crop&w=800&q=60' },
                  { key: '5', uri: 'https://images.unsplash.com/photo-1516570693226-2242cec4bfaf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1ce58e24c137237456ffe2c636ff6135&auto=format&fit=crop&w=800&q=60' },
                  { key: '9', uri: 'https://images.unsplash.com/photo-1538576149665-2e62ea812999?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b5786bd9a9a98a1cecd8cbc5dc5ce1&auto=format&fit=crop&w=668&q=80' },
                  { key: '3', uri: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b65afe192a0efba2046ab14531040e06&auto=format&fit=crop&w=800&q=60' },
                  { key: '8', uri: 'https://images.unsplash.com/photo-1506823457530-eaa585c3643c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c3d71db1f81a2f15cac318eb26ffb56&auto=format&fit=crop&w=800&q=60' },
                  { key: '1', uri: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&s=bdf25483175f4c91809c86045ca36ecb&auto=format&fit=crop&w=800&q=60' }
              ]}
            />
        </View>
        </SafeAreaView>



    );
  }
}

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlignVertical: 'center',
    justifyContent: 'center',
    }
 })
