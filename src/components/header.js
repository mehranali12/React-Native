import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';


export default function Header({ icon, Keera, rating, image, location }) {
    return (
        <View style={Styles.maincontainer}>

            <View style={Styles.header}>
                <View style={{ flexDirection: 'row', }}>

                    {
                        image ? (
                            <Image source={image}
                                style={{ height: 50, width: 50, borderRadius: 25, }}
                            />
                        ) : null
                    }
                    <View style={{alignItems: 'center', paddingTop: 1,}}>
                        <Text style={Styles.Keera}>{Keera}</Text>
                        <Text style={{}}>{rating}</Text>
                    </View>
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
    header: {
        height: 70,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    Keera: {
        color: COLORS.black,
        fontFamily: FONTS.poppins,
        fontSize: 20,
        lineHeight: 30,
        fontStyle: 'normal',
        alignSelf: 'center',
        paddingLeft: 16,
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