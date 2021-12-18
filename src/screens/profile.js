import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, onPress } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import Header from "../components/header";
import Bottom from "../components/bottom";
import { GolbalStyle } from "../utils/GlobalStyles";


export default function profile({ navigation }) {
    return (
        <View style={GolbalStyle.maincontainer}>
            <View style={{}}>
                <Header
                    image={require('../../assets/profile.jpg')}
                    Keera='Keera'
                    rating='5 Stars'
                    icon={require('../assets/icons/location.png')}
                    location="Pomona, CA"
                />
            </View>

            <View style={{ flex: 1, marginTop: 8, paddingHorizontal: 16, }}>
                <View style={Styles.allFields}>
                    <Text style={Styles.allFieldsText}>My Keraa</Text>
                </View>

                <View style={[Styles.allFieldsSubField, { marginHorizontal: 25, borderBottomWidth: 1, }]}>
                    <Text style={Styles.allFieldsSubText}>Listings</Text>
                    <Image source={require('../assets/icons/rightErrow.png')}
                        style={{ alignSelf: 'center' }} />
                </View>

                <View style={[Styles.allFieldsSubField, { paddingHorizontal: 25, borderBottomWidth: 1, }]}>
                    <Text style={Styles.allFieldsSubText}>Favorites</Text>
                    <Image source={require('../assets/icons/rightErrow.png')}
                        style={{ alignSelf: 'center' }} />
                </View>

                <View style={Styles.allFields}>
                    <Text style={Styles.allFieldsText}>Rentings</Text>
                </View>

                <View style={Styles.allFields}>
                    <Text style={Styles.allFieldsText}>General</Text>
                </View>
                <View style={[Styles.allFieldsSubField, { marginHorizontal: 25, borderBottomWidth: 1, }]}>
                    <Text style={Styles.allFieldsSubText}>Settings</Text>
                    <Image source={require('../assets/icons/rightErrow.png')}
                        style={{ alignSelf: 'center' }} />
                </View>

                <View style={[Styles.allFieldsSubField, { marginHorizontal: 25, borderBottomWidth: 1, }]}>
                    <Text style={Styles.allFieldsSubText}>Invite Friends</Text>
                    <Image source={require('../assets/icons/rightErrow.png')}
                        style={{ alignSelf: 'center' }} />
                </View>
                <View style={[Styles.allFieldsSubField, { marginHorizontal: 25, borderBottomWidth: 1, }]}>
                    <Text style={Styles.allFieldsSubText}>Support</Text>
                    <Image source={require('../assets/icons/rightErrow.png')}
                        style={{ alignSelf: 'center' }} />
                </View>
                <TouchableOpacity  onPress={() => navigation.navigate('JoinUs')}>
                    <View style={[Styles.allFieldsSubField, { marginHorizontal: 25, }]}>
                        <Text style={Styles.allFieldsSubText}>Logout</Text>
                        <Image source={require('../assets/icons/rightErrow.png')}
                            style={{ alignSelf: 'center' }} />
                    </View>
                </TouchableOpacity>

            </View>

            {/* <Bottom /> */}

        </View>
    );
}


const Styles = StyleSheet.create({
    allFields: {
        borderBottomWidth: 1,
        borderColor: COLORS.grayDark,
        paddingVertical: 8,
    },
    allFieldsSubField: {
        borderColor: COLORS.grayDark,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    allFieldsText: {
        fontSize: 18,
        lineHeight: 27,
        fontStyle: 'normal',
        color: COLORS.black,
        fontFamily: FONTS.poppinsMedium,
    },
    allFieldsSubText: {
        fontSize: 14,
        lineHeight: 24,
        fontStyle: 'normal',
        color: COLORS.black,
        fontFamily: FONTS.poppinsMedium,
    },
});