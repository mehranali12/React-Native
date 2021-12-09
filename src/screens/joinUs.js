import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import Header from "../components/header";
import TextButton from "../components/TextButton";
import Bottom from "../components/bottom";
import {GolbalStyle} from "../utils/GlobalStyles";


export default function joinUs({ navigation }) {
    return (
        <View style={GolbalStyle.maincontainer}>

            <Header
                text='Keraa'
                icon={require('../assets/icons/location.png')}
                location="Pomona, CA"
            />
            
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={GolbalStyle.title}>Join Us</Text>
                </View>

                <Text style={[GolbalStyle.paragrap, { fontSize: 16, lineHeight: 24, marginTop: 10, color: COLORS.black, }]}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                </Text>

                {/* we call the TextButton here */}
                <View style={{ marginTop: 30 }} />
                <TextButton
                    style={{ color: COLORS.white, }}
                    text='Create Account'
                    onPress={() => navigation.navigate('login')}
                    icon={require('../assets/icons/user.png')}
                />
                <View style={{ marginTop: 24 }} />
                <TextButton
                    style={{ backgroundColor: COLORS.white, color: COLORS.blue, }}
                    text='Sign In with Google'
                    // onPress={() => navigation.navigate('Home')}
                    icon={require('../assets/icons/google.png')}
                />
                <View style={{ marginTop: 24 }} />
                <TextButton
                    style={{ backgroundColor: COLORS.white, color: COLORS.blue, }}
                    text='Sign In with Facebook'
                    // onPress={() => navigation.navigate('Home')}
                    icon={require('../assets/icons/facebook.png')}
                />

                <TouchableOpacity>
                    <Text style={[GolbalStyle.paragrap,
                        { marginTop: 20, color: COLORS.blue, fontSize: 12, lineHeight: 21,
                        }]}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>


            <Bottom data={false} />
        </View>
    );
}
