import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FONTS } from '../constants';

export default DrawerData = ({ text, subtext, onPress, icon, style }) => {
    return (
        <TouchableOpacity onPress={onPress}  >
            <View style={[Styles.list, style]}>

                <View style={{ flexDirection: 'row', }}>
                    <View style={{ }}>
                        <Image resizeMode='contain' source={icon}
                            style={{ height:25, width:25, }} />
                    </View>

                    <View style={{ justifyContent: 'center' , marginLeft: 16 }}>
                        <Text style={[Styles.text, style, { }]}>{text}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: "center" }}>
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