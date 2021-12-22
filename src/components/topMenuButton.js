import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';


export default function topMenuButton({ tittle, subTittle, style, onpress, icon }) {
    return (
        <View style={[Styles.maincontainer]}>
            <TouchableOpacity onPress={onpress}>
            <View style={Styles.buttonDiv} onpress={onpress}>
                <Text style={Styles.tittle}>{tittle}</Text>
                <Text style={Styles.subTittle}>{subTittle}</Text>
            </View>
            </TouchableOpacity>
        </View >
    );
}


const Styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    buttonDiv: {
        borderWidth: 1,
        backgroundColor: COLORS.white,
        marginHorizontal: 16,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        flexDirection: 'row'
    },
    tittle: {
        color: COLORS.black,
        fontFamily: FONTS.poppinsMedium,
        fontStyle: 'normal',
        fontSize: 16,
        justifyContent: 'center',
        textAlign: "center",
    },
    subTittle: {
        color: COLORS.black,
        fontFamily: FONTS.poppinsMedium,
        fontStyle: 'normal',
        fontSize: 12,
        marginTop: 5,
    }
});