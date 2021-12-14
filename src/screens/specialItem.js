import React, { useState } from "react";
import { View, Text, StyleSheet, Image,} from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TopMenuButton from "../components/topMenuButton";
import Bottom from "../components/bottom";
import Slider from "../components/carasol";
import { GolbalStyle } from "../utils/GlobalStyles";


export default function specialItem({ navigation, props }) {
    return (
        <View style={GolbalStyle.maincontainer}>
            <View style={{ flex: 1 }}>
                <View style={Styles.slider}>
                  <Slider/>
                </View>
                <View style={[Styles.textView, { marginTop: 10 }]}>
                    <Text style={Styles.text}>2017 BMW</Text>
                </View>
                <View style={Styles.imageView}>
                    <Image source={require('../../assets/profile.jpg')}
                        style={{ borderRadius: 22, }}
                    />
                    <View style={{ marginLeft: 10, }}>
                        <Text style={[Styles.profiletext, { fontSize: 14, lineHeight: 21, color: COLORS.grayDark }]}>Owner</Text>
                        <Text style={[Styles.profiletext, { marginTop: 5, fontSize: 16, lineHeight: 24, color: COLORS.black }]}>Dilawar Hussain</Text>
                    </View>
                </View>
                <View style={Styles.TopMenuButtonDiv}>
                    <TopMenuButton tittle='$50/day' style={Styles.textStyle} />
                    <TopMenuButton tittle='$50/week' style={Styles.textStyle} />
                    <TopMenuButton tittle='$50/month' style={Styles.textStyle} />
                </View>
                <View style={[Styles.textView, {}]}>
                    <Text style={Styles.text}>About Item:</Text>
                </View>
                <View style={[Styles.textView, {}]}>
                    <Text style={Styles.text1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Text>
                </View>
            </View>
            <Bottom data={true} />
        </View>
    );
}
const Styles = StyleSheet.create({
    slider: {
        height: 250,
        width: '100%',
    },
    textView: {
        paddingHorizontal: 16,
    },
    text: {
        fontSize: 18,
        lineHeight: 30,
        fontFamily: FONTS.poppinsMedium,
        fontStyle: 'normal',
        color: COLORS.black,
    },
    text1: {
        fontSize: 12,
        lineHeight: 19,
        fontFamily: FONTS.poppins,
        fontStyle: 'normal',
        color: COLORS.black,
    },
    imageView: {
        borderBottomWidth: 1,
        borderColor: COLORS.blue,
        paddingVertical: 10,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    profiletext: {
        fontFamily: FONTS.poppins,
        fontStyle: 'normal'
    },
    TopMenuButtonDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        height: 80, width: '100%',
    },
    textStyle: {
        backgroundColor:'#fff',
        color: COLORS.black,
        fontFamily: FONTS.poppins,
        fontStyle: 'normal',
        fontSize: 10,
        padding:"20%",
        justifyContent:'center',
        alignItems:"center",
        borderRadius: 15,
        textAlign:"center"
       
    },
});