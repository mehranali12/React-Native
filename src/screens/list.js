import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextButton from "../components/TextButton";
import { GolbalStyle } from "../utils/GlobalStyles";
import {
    lending
} from '../data/data'

const renderpupolerDataItem = ({ item, index }) => {
    let a = true
    if (index == 1 || index == 0) {
        a = false
    }
    return (
        <TouchableOpacity onPress={item?.onPress}
            style={{
                backgroundColor: COLORS.white,
                borderRadius: 15,
                width: '48%',
                marginRight: 16,
                marginTop: a == true ? 16 : 0,
            }}>
            <Image
                imageStyle={{ borderTopRightRadius: 15, borderTopLeftRadius: 15, }}
                source={item.icon}
                style={Styles.ImageBackground} />
            <Text style={Styles.ImageBackgroundText}>
                {item.name}</Text>
            <Text
                style={Styles.ImageBackgroundSubText}>
                {item.rate}</Text>
        </TouchableOpacity>)
}
export default function list({ navigation }) {
    const [show, setshow] = useState(true)
    return (
        <View style={GolbalStyle.maincontainer}>

            <View style={Styles.header}>
                <Text style={Styles.headertext}>My Listings</Text>
            </View>

            <View style={Styles.headButon}>
                <TouchableOpacity onPress={() => setshow(true)} style={{ backgroundColor: show ? COLORS.blue : COLORS.gray, width: "50%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={[GolbalStyle.buttonText, { color: show ? COLORS.white : 'black' }]}>Borrowing</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setshow(false)} style={{ backgroundColor: show ? COLORS.gray : COLORS.blue, width: "50%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={[GolbalStyle.buttonText, { color: show == false ? COLORS.white : 'black' }]}>Lending</Text>
                </TouchableOpacity>
            </View>

            {show ? (
                <>
                    <View style={GolbalStyle.centerIcon}>
                        <Image source={require('../assets/icons/centerIcon.png')} />
                    </View>

                    <View style={{ marginTop: 44, }} />
                    <TextButton
                        style={{ color: COLORS.white, fontSize: 18, lineHeight: 27, }}
                        text='Add your first item +'
                    />
                </>

            ) :
                <View style={{ marginHorizontal: 12, marginTop: 16, flex: 1 }}>
                    <FlatList
                        style={{ marginBottom: 16 }}
                        showsVerticalScrollIndicator={false}
                        data={lending}
                        renderItem={renderpupolerDataItem}
                        listkey={(item, index) => index}
                        numColumns={2}
                    />
                </View>
            }

        </View>
    );
}


const Styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        justifyContent: 'center'
    },
    headertext: {
        color: COLORS.black,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 20,
        lineHeight: 30,
        fontStyle: 'normal',
    },
    headButon: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        elevation: 5,
    },
    button: {
        height: 48,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImageBackground: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    ImageBackgroundText: {
        color: COLORS.blue,
        fontFamily: FONTS.poppins,
        fontStyle: 'normal',
        marginLeft: 8,
        marginRight: 8,
        fontSize: 14,
        lineHeight: 21,
        marginTop: 5,
    },
    ImageBackgroundSubText: {
        color: COLORS.blue,
        fontFamily: FONTS.poppins,
        fontStyle: 'normal',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 5,
        fontSize: 10,
        lineHeight: 15,
        paddingBottom: 10
    },
});