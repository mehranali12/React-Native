import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';



export default function bottom(props) {
    console.log(props)
    return (
        <View style={Styles.maincontainer}>
            {props?.data ? (
                <View style={Styles.buttom}>
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{}}>
                            <Image source={require('../assets/icons/phone.png')}
                                style={{ height: 24, width: 24, marginLeft: 16, }} />
                        </View>

                        <View style={{ borderRightWidth: 1, borderColor: COLORS.grayDark, paddingLeft: 30 }} />
                        <View style={{ paddingLeft: 30 }}>
                            <Image source={require('../assets/icons/message.png')}
                                style={{ height: 24, width: 24, }} />
                        </View>

                        <View style={{ borderRightWidth: 1, borderColor: COLORS.grayDark, paddingLeft: 30 }} />
                        <View style={{ paddingLeft: 30 }}>
                            <Image source={require('../assets/icons/clander.png')}
                                style={{ height: 24, width: 24, }} />
                        </View>

                    </View>
                </View>
            ) :
                <View style={[Styles.buttom, { flexDirection: 'row-reverse', paddingHorizontal: 16, }]}>
                    <View style={{}}>
                        <Image source={require('../assets/icons/user1.png')}
                            style={{ height: 24, width: 24, }} />
                    </View>
                </View>
            }
        </View>
    );
}


const Styles = StyleSheet.create({
    maincontainer: {

    },
    buttom: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,

    },
});