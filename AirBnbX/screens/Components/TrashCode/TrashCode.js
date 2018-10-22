<TouchableOpacity
    onPress = {() => this.increaseHeightOfLogin()}
>
    <Animated.View style={{ marginTop: marginTop, //animated
    paddingHorizontal: 25, flexDirection: 'row' }}>


    <Image
        source={require('../assets/SwedishFlagIcon.png')}
        style={{ height: 24, width: 24, resizeMode: 'contain' }}
    />
    <Animated.View
        pointerEvents='none'
        style={{
            flex: 1,
            flexDirection: 'row',
            borderBottomWidth: this.borderBottomWidth
        }}>
        <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>
            +46
        </Text>

        <TextInput
            ref="textInputMobile"
            style={{ flex: 1, fontSize: 20 }}
            placeholder= 'Enter your mobile number'
            underlineColorAndroid='transparent'
        />
    </Animated.View>

    <View style={{ height: 70, backgroundColor: 'white',
    alignItems: 'flex-start', justifyContent: 'center',
    borderTopColor: '#e8e8ec', borderTopWidth: 1,
    paddingHorizontal: 25 }}>
        <Text style={{ color: '#355C7D', fontWeight: 'bold' }}>Or connect using a social media account</Text>
    </View>
    
    </Animated.View>
</TouchableOpacity>
