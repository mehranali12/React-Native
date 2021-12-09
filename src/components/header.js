import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';


export default function Header({ icon, text, image, location }) {
    return (
        <View style={Styles.maincontainer}>

            <View style={Styles.header}>
                <View style={{ flexDirection: 'row', }}>
                    {image ? (
                        <Image source={image}
                            style={{ height: 50, width: 50, borderRadius: 25, }}
                        />
                    ) : null}
                    <Text style={Styles.headertext}>{text}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Image source={icon}
                        style={{ height: 20, width: 14, marginRight: 15, }}
                    />
                    <View>
                        <Text style={Styles.text}>{location}</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}


const Styles = StyleSheet.create({
    maincontainer: {},
    header: {
        height: 70,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headertext: {
        color: COLORS.black,
        fontFamily: FONTS.poppins,
        fontSize: 20,
        lineHeight: 30,
        fontStyle: 'normal',
        marginLeft: 16,
        alignSelf: 'center'
    },
    text: {
        color: COLORS.grayDark,
        fontFamily: FONTS.poppins,
        fontSize: 16,
        lineHeight: 24,
        fontStyle: 'normal',

        alignSelf: 'center'
    },
});