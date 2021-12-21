import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FONTS } from '../constants';
import { GolbalStyle } from "../utils/GlobalStyles";

export default TextButton = ({ text, onPress, icon, style }) => {
    return (
        <View style={{}}>
            <TouchableOpacity onPress={onPress} style={[GolbalStyle.loginButton, style]} >
                {icon ? (
                    <Image source={icon}
                        style={{ height: 19, width: 19, }} />

                ) : null}

                <Text style={[style,
                    { fontSize: 16, fontFamily: FONTS.poppins, paddingLeft: icon ? 10 :0,}]}>
                    {text}</Text>
            </TouchableOpacity>
        </View>
    )
}
