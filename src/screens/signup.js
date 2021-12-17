import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { GolbalStyle } from "../utils/GlobalStyles";
import TextButton from "../components/TextButton";
import Header from "../components/header";
import Bottom from "../components/bottom";


export default function signup({ navigation }) {
    return (
        <View style={GolbalStyle.maincontainer}>

            <Header
                text='Keraa'
                icon={require('../assets/icons/location.png')}
                location="Pomona, CA"
            />
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={GolbalStyle.title}>Sign Up</Text>
                </View>

                <View style={[GolbalStyle.loginButton, { backgroundColor: COLORS.white, marginTop: 16, borderColor: COLORS.white, }]}>
                    <TextInput
                        style={[GolbalStyle.buttonText, { color: COLORS.grayDark, width: '100%', paddingLeft: 16 }]}
                        placeholder="Full name"
                    />
                </View>

                <View style={[GolbalStyle.loginButton, { backgroundColor: COLORS.white, marginTop: 16, borderColor: COLORS.white, }]}>
                    <TextInput
                        style={[GolbalStyle.buttonText, { color: COLORS.grayDark, width: '100%', paddingLeft: 16 }]}
                        placeholder="User name"
                    />
                </View>

                <View style={[GolbalStyle.loginButton, { backgroundColor: COLORS.white, marginTop: 16, borderColor: COLORS.white, }]}>
                    <TextInput
                        style={[GolbalStyle.buttonText, { color: COLORS.grayDark, width: '100%', paddingLeft: 16 }]}
                        placeholder="E-mail"
                    />
                </View>

                <View style={[GolbalStyle.loginButton, { backgroundColor: COLORS.white, marginTop: 16, borderColor: COLORS.white, }]}>
                    <TextInput
                        style={[GolbalStyle.buttonText, { color: COLORS.grayDark, width: '100%', paddingLeft: 16 }]}
                        placeholder="Password"
                    />
                </View>

                <View style={{ marginTop: 16 }} />
                <TextButton
                    style={{ color: COLORS.white, }}
                    text='Sign Up'
                    onPress={() => navigation.navigate('login')}
                />

                <Text style={[GolbalStyle.paragrap, { marginTop: 20, color: COLORS.blue, fontSize: 12, lineHeight: 21, }]}>
                    Already have an account ?
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('login')}
                >
                    <Text style={[GolbalStyle.paragrap, { marginTop: 2, color: COLORS.blue, fontSize: 14, lineHeight: 27, }]}>
                        Log In
                    </Text>
                </TouchableOpacity>


            </View>
            <Bottom data={false} />

        </View>
    );

}

const Styles = StyleSheet.create({});