import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../constants';

export default MyPostFields = ({ text, onPress, icon, style }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[Styles.TextField, style]}>
                <View style={{flexDirection: 'row',}}>
                    <Image  source={icon} />
                </View>
                <View style={{}}>
                    <Text style={[Styles.text, style]}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    TextField: {
        borderColor: COLORS.white,
        borderRadius: 10,
        marginHorizontal: 16,
        height: 96,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 27,
        fontFamily: FONTS.poppins,
        fontStyle: 'normal',
        paddingLeft: 15
    }
})