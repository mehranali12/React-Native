import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import { color } from 'react-native-reanimated';
import { COLORS } from '../constants';
import { FONTS } from '../constants';

export default DrawerData = ({ text, subtext, onPress, icon, style }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[Styles.list, style]}>

                <View style={{flexDirection: 'row',}}>
                    <Image source={icon}
                        style={{}} />

                    <View style={{}}>
                        <Text style={[Styles.text, style, { marginLeft: 10 }]}>{text}</Text>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={[Styles.text, style, {}]}>{subtext}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 14,
        lineHeight: 21,
        fontFamily: FONTS.poppinsMedium,
        fontStyle: 'normal',
    }
})