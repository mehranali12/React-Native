import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, } from 'react-native';
import { color } from 'react-native-reanimated';
import { COLORS } from '../constants';
import { FONTS } from '../constants';

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