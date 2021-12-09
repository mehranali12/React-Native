import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import { color } from 'react-native-reanimated';
import { COLORS } from '../constants';
import { FONTS } from '../constants';
import { GolbalStyle } from "../utils/GlobalStyles";

export default TextButton = ({ text, onPress, icon, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[GolbalStyle.loginButton, style]} >
            <Image source={icon}
                style={{ height: 19, width: 19, }} />
            <Text style={[style,
                { paddingLeft: icon ? 8 : 0, fontSize: 16, fontFamily: FONTS.poppins, }]}>
                {text}</Text>
        </TouchableOpacity>
    )
}
