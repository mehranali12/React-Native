import React, { useState } from "react";
import { Image, Linking, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from "../components/carasol";
import CustomCalendar from "../components/CustomCalendar";
import TextButton from '../components/TextButton';
import TopMenuButton from "../components/topMenuButton";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { GolbalStyle } from "../utils/GlobalStyles";
import {
    productFeature
} from '../data/data'


export default function productDetail({ navigation }) {
    const [calendarshow, setcalandar] = useState(false)
    return (
        <>
            <View style={GolbalStyle.maincontainer}>

                <View style={{ flex: 1 }}>
                    <View style={Styles.slider}>
                        <Slider />
                        <View style={{ position: "absolute", paddingHorizontal: 18, marginVertical: '3%', flexDirection: "row", justifyContent: 'space-between', width: "100%" }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 100,
                                    backgroundColor: "rgba(0,0,0,0.3)",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 1
                                }}>
                                <MaterialIcons name='keyboard-arrow-left' color="#fff" size={30} />

                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <TouchableOpacity>
                                    <MaterialIcons name='favorite-border' color="#fff" size={30} />

                                </TouchableOpacity>

                                <TouchableOpacity style={{ marginLeft: 12 }}>
                                    <AntDesign name='sharealt' color="#fff" size={30} />

                                </TouchableOpacity>


                            </View>


                        </View>
                    </View>

                    <ScrollView contentContainerStyle={{ }}>
                        <View style={[Styles.textView, { marginTop: 10 }]}>
                            <Text style={Styles.text}>2017 BMW</Text>
                        </View>
                        <View style={Styles.imageView}>
                            <Image source={require('../../assets/profile.jpg')}
                                style={{ borderRadius: 22, }}
                            />
                            <View style={{ marginLeft: 10, }}>
                                <Text style={[Styles.profiletext, { fontSize: 14, lineHeight: 21, color: COLORS.grayDark }]}>Owner</Text>
                                <Text style={[Styles.profiletext, { fontSize: 16, lineHeight: 24, color: COLORS.black }]}>Dilawar Hussain</Text>
                            </View>
                        </View>
                        <View style={Styles.TopMenuButtonDiv}>
                            <TopMenuButton tittle='$50/' subTittle='day' style={Styles.textStyle} />
                            <TopMenuButton tittle='$50/' subTittle='week' style={Styles.textStyle} />
                            <TopMenuButton tittle='$50/' subTittle='month' style={Styles.textStyle} />
                        </View>

                        <View style={[Styles.textView, {}]}>
                            <Text style={Styles.text}>About Item:</Text>
                        </View>
                        <View style={[Styles.textView, {}]}>
                            <Text style={Styles.text1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text......................</Text>
                        </View>
                        <View style={[Styles.textView, { marginTop: 12 }]}>
                            <Text style={Styles.text}>Specification/Features:</Text>
                        </View>
                        <View style={{ marginTop: 12, backgroundColor: "#fff", borderRadius: 8, elevation: 10, marginHorizontal: 16, paddingHorizontal: 16, paddingBottom: 12 }}>
                            {productFeature.map((item, index) => (
                                <View key={index}
                                    style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: index == 0 ? 16 : 8, borderBottomWidth: 0.8, borderColor: COLORS.grayDark, paddingBottom: 8 }}>
                                    <Text style={[Styles.profiletext, { fontSize: 14, color: COLORS.black }]}>{item.title}</Text>
                                    <Text style={[Styles.profiletext, { fontSize: 14, color: COLORS.black }]}>{item.data}</Text>
                                </View>
                            ))}

                        </View>
                    </ScrollView>
                </View>

                <View style={Styles.buttom}>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL(
                                `tel:${'+' + 9200000000000}`,
                            );
                        }}
                        style={{ zIndex: 1 }}>
                        <Image source={require('../assets/icons/phone.png')}
                            style={{ height: 20, width: 20, }} />
                    </TouchableOpacity>

                    <View style={{ borderRightWidth: 1, borderColor: COLORS.grayDark, width: 5, height: 20 }} />
                    <TouchableOpacity
                        onPress={() => Linking.openURL('mailto:Gemnine@example.com')}
                        style={{}}>
                        <Image source={require('../assets/icons/message.png')}
                            style={{ height: 20, width: 20, }} />
                    </TouchableOpacity>

                    <View style={{ borderRightWidth: 1, borderColor: COLORS.grayDark, width: 5, height: 20 }} />
                    <TouchableOpacity
                        onPress={() => setcalandar(true)}
                        style={{}}>
                        <Image source={require('../assets/icons/clander.png')}
                            style={{ height: 20, width: 20, }} />
                    </TouchableOpacity>
                </View>
                <Modal
                    visible={calendarshow}
                    transparent={true}
                    onRequestClose={() => {
                        setcalandar(false);
                    }}
                    statusBarTranslucent={true}
                >
                    <View style={{ flex: 1, justifyContent: "flex-end", borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: "rgba(0,0,0,0.5)", marginBottom: 16, }}>

                        <TouchableOpacity style={{ height: '45%' }} onPress={() => setcalandar(false)}></TouchableOpacity>
                        <View style={{ height: '65%', backgroundColor: "#fff", paddingTop: 18, borderRadius: 10 }}>

                            <TouchableOpacity onPress={() => setcalandar(false)}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 100,
                                    backgroundColor: "rgba(0,0,0,0.3)",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 1,
                                    marginLeft: 16
                                }}>
                                <Entypo name='cross' color="#fff" size={20} />

                            </TouchableOpacity>
                            <CustomCalendar />
                            <TextButton
                                style={{ color: COLORS.white, }}
                                text='Confirm'
                                onPress={() => {
                                    setcalandar(false)
                                }}
                            />
                        </View>
                    </View>

                </Modal>
            </View>
        </>
    );
}
const Styles = StyleSheet.create({
    slider: {
        height: 250,
        width: '100%',
    },
    textView: {
        paddingHorizontal: 16,
    },
    text: {
        fontSize: 18,
        lineHeight: 30,
        fontFamily: FONTS.poppinsMedium,
        fontStyle: 'normal',
        color: COLORS.black,
    },
    text1: {
        fontSize: 12,
        lineHeight: 19,
        fontFamily: FONTS.poppins,
        fontStyle: 'normal',
        color: COLORS.black,
    },
    imageView: {
        borderBottomWidth: 1,
        borderColor: COLORS.blue,
        paddingVertical: 10,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    profiletext: {
        fontFamily: FONTS.poppins,
        fontStyle: 'normal'
    },
    TopMenuButtonDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    textStyle: {
        color: COLORS.black,
        fontFamily: FONTS.poppins,
        fontStyle: 'normal',
        fontSize: 14,
        justifyContent: 'center',
        textAlign: "center",
    },
    buttom: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        flexDirection: 'row',
        height: 50,
        width: "100%",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 24,

        bottom: 0,

    },
});