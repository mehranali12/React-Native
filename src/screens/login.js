import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { GolbalStyle } from "../utils/GlobalStyles";
import TextButton from "../components/TextButton";
import Header from "../components/header";
import Bottom from "../components/bottom";


export default function login({ navigation }) {
    return (
        <View style={GolbalStyle.maincontainer}>

            <Header
                text='Keraa'
                icon={require('../assets/icons/location.png')}
                location="Pomona, CA"
            />
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={GolbalStyle.title}>Wellcome to Log In</Text>
                </View>

                <View style={[GolbalStyle.loginButton, { backgroundColor: COLORS.white, marginTop: 30, borderColor: COLORS.white, borderWidth: 1,}]}>
                    <TextInput
                        style={[GolbalStyle.buttonText, { color: COLORS.grayDark, width: '100%', }]}
                        placeholder="User name"
                    />
                </View>

                <View style={[GolbalStyle.loginButton, { backgroundColor: COLORS.white, marginTop: 16, borderColor: COLORS.white, }]}>
                    <TextInput
                        style={[GolbalStyle.buttonText, { color: COLORS.grayDark, width: '100%', }]}
                        placeholder="Password"
                    />
                </View>

                <View style={{ marginTop: 40 }} />
                <TextButton
                    style={{ color: COLORS.white, }}
                    text='Log In'
                    onPress={() => navigation.navigate('Home')}
                />

                <Text style={[GolbalStyle.paragrap, { marginTop: 20, color: COLORS.blue, fontSize: 12, lineHeight: 21, }]}>
                    Don,t have an account ?
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('signup')}
                >
                    <Text style={[GolbalStyle.paragrap, { marginTop: 2, color: COLORS.blue, fontSize: 14, lineHeight: 27, }]}>
                        Sign Up
                    </Text>
                </TouchableOpacity>


            </View>
            <Bottom data={false} />

        </View>
    );

}

const Styles = StyleSheet.create({});