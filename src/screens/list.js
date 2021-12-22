import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextButton from "../components/TextButton";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { GolbalStyle } from "../utils/GlobalStyles";

const renderBox = ({ item, index }) => {
    let showBanner = false
    if (index % 4 == 0 && index != 0) {
        showBanner = true
    }
    return (
        <View>
            {
                showBanner ? (
                    <Image
                        resizeMode="contain"
                        style={{ marginTop: 16, width: "100%" }}
                        source={require("../../assets/baner.jpg")}
                    />
                ) : null
            }

            <View style={{ flexDirection: "row", marginTop: 16, backgroundColor: "#fff", borderRadius: 15, height: 120, elevation: 3, marginHorizontal: 8 }}>
                <Image
                    style={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8, height: '100%', width: '48%' }}
                    resizeMode="cover"
                    source={item.icon}
                />
                <View style={{ padding: "3%", flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                        <View>
                            <Text style={{ fontSize: 16 }}>{item.time}</Text>
                        </View>
                    </View>
                    <Text style={{ marginTop: 8 }}>{item.p1}</Text>
                    <Text style={{ marginTop: 8, marginBottom: 8 }}>{item.p2}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{item.p3}</Text>
                        <TouchableOpacity>
                            <Image
                                style={{ height: 16, width: 10, alignSelf: 'center', }}
                                source={item.image}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default function list({ navigation }) {
    const [show, setshow] = useState(true)
    const category = [
        {
            id: 1,
            name: 'Toyota Corolla',
            icon: require('../../assets/carsmodel.jpg'),
            time: '2h',
            p1: '$10/day',
            p2: '$30/week',
            p3: '$100/month',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 2,
            name: 'Toyota Corolla',
            icon: require('../../assets/camera1.jpg'),
            time: '1h',
            p1: '$10/day',
            p2: '$12/week',
            p3: '$40/month',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 1,
            name: 'Toyota Corolla',
            icon: require('../../assets/carsmodel.jpg'),
            time: '2h',
            p1: '$10/day',
            p2: '$10/week',
            p3: '$30/month',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 2,
            name: 'Toyota Corolla',
            icon: require('../../assets/camera1.jpg'),
            time: '1h',
            p1: '$10/day',
            p2: '$10/week',
            p3: '$10/month',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 1,
            name: 'Toyota Corolla',
            icon: require('../../assets/carsmodel.jpg'),
            time: '2h',
            p1: '$10/day',
            p2: '$10/week',
            p3: '$10/month',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 2,
            name: 'Toyota Corolla',
            icon: require('../../assets/camera1.jpg'),
            time: '1h',
            p1: '$10/day',
            p2: '$10/week',
            p3: '$10/month',
            image: require('../assets/icons/rightErrow.png'),
        },
    ];
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
                <View style={{ marginHorizontal: 12, marginTop: 16, flex: 1 , }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={category}
                        renderItem={renderBox}
                        ListFooterComponent={()=> {
                            return(
                                <View style={{height:10}}>
                                    </View>
                            )
                        }}
                        keyExtractor={(item, index) => index}
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