import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TopMenuButton from "../components/topMenuButton";
import Bottom from "../components/bottom";
import Slider from "../components/carasol";
import { GolbalStyle } from "../utils/GlobalStyles";


export default function specialItem({ navigation, props }) {

    const [modalOpen, setModalOpen] = useState(false);
    const hideModal = () => setVisible(false);

    return (
        <View style={GolbalStyle.maincontainer}>

            {/** This is the start modal of popup screen**/}
            <Modal
                transparent={true}
                visible={modalOpen}>
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    width: 80,
                    borderWidth: 1,
                    borderColor: 'red',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    alignItems: 'center',
                }}>
                    <TouchableOpacity  onPress={() => setModalOpen(false)}>
                    <View style={{borderWidth: 1, marginTop: 16, height: 20, width: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/icons/downErrow.png')} style={{}} />
                    </View>
                    </TouchableOpacity>
                </View>
            </Modal>


            <View style={{ flex: 1 }}>
                <View style={Styles.slider}>
                    <Slider />
                </View>
                <View style={[Styles.textView, { marginTop: 10 }]}>
                    <Text style={Styles.text}>2017 BMW</Text>
                </View>
                <View style={Styles.imageView}>
                    <Image source={require('../../assets/profile.jpg')}
                        style={{ borderRadius: 22, }}
                    />
                    <View style={{ marginLeft: 10, }}>
                        <Text style={[Styles.profiletext, { fontSize: 14, lineHeight: 21, color: COLORS.grayDark }]}>Owner</Text>
                        <Text style={[Styles.profiletext, { marginTop: 5, fontSize: 16, lineHeight: 24, color: COLORS.black }]}>Dilawar Hussain</Text>
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
            </View>
            <TouchableOpacity style={{ flexDirection: 'row-reverse', }} onPress={() => setModalOpen(true)}>
                <View style={{ height: 50, width: 40, borderBottomWidth: 1, borderLeftWidth: 1, marginBottom: 5, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 15, backgroundColor: COLORS.white, elevation: 2, }}>
                    <Image source={require('../assets/icons/upErrow.png')} style={{}} />
                </View>
            </TouchableOpacity>

            <Bottom data={true} />
        </View>
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
});