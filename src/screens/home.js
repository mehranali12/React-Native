import React from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, } from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { GolbalStyle } from "../utils/GlobalStyles";

export default function Home({ navigation }) {

    const category = [
        {
            key: 0,
            name: 'LAPTOP',
            icon: require('../assets/icons/laptop.png')
        },
        {
            key: 1,
            name: 'Vehcile',
            icon: require('../assets/icons/car.png')
        },
        {
            key: 2,
            name: 'CAMERA',
            icon: require('../assets/icons/camera.png')
        },
        {
            key: 3,
            name: 'HOUSE',
            icon: require('../assets/icons/home.png')
        },
        {
            key: 4,
            name: 'ALL',
            icon: require('../assets/icons/window.png'),
            onPress: () => navigation.openDrawer(),
        },
    ];
    const alldata = {
        car: [
            {
                key: 5,
                name: 'Rent a car',
                icon: require('../assets/icons/car.png'),
            },
            {
                key: 6,
                name: 'Lorem Ipsum sit de ell more',
                icon: require('../../assets/car.jpg'),
                rate: '$10/day • $50/week • $90/month'
            },
            {
                key: 7,
                name: 'Lorem Ipsum sit de ell more',
                icon: require('../../assets/car2.jpg'),
                rate: '$10/day • $50/week • $90/month'
            },
            {
                key: 8,
                name: 'Lorem Ipsum sit de ell more',
                icon: require('../../assets/carsmodel.jpg'),
                rate: '$10/day • $50/week • $90/month'
            },
        ],
        photography: [
            {
                key: 9,
                name: 'Photography',
                icon: require('../assets/icons/camera.png'),
            },
            {
                key: 10,
                name: 'Lorem Ipsum sit de ell more',
                icon: require('../../assets/camera1.jpg'),
                rate: '$10/day • $50/week • $90/month'
            },
            {
                key: 11,
                name: 'Lorem Ipsum sit de ell more',
                icon: require('../../assets/retrocamera.jpg'),
                rate: '$10/day • $50/week • $90/month'
            },
            {
                key: 12,
                name: 'Lorem Ipsum sit de ell more',
                icon: require('../../assets/camera2.jpg'),
                rate: '$10/day • $50/week • $90/month'
            },
        ],
    }
    const pupolerData = [
        {
            key: 13,
            name: 'Lorem Ipsum sit de ell ',
            icon: require('../assets/icons/carsmodel.jpg'),
            rate: '$10/day • $50/week • $90/month',
            onPress: () => navigation.navigate('specialItem'),
        },
        {
            key: 14,
            name: 'Lorem Ipsum sit  ell more',
            icon: require('../../assets/camera1.jpg'),
            rate: '$10/day • $50/week • $90/month',
            onPress: () => navigation.navigate('specialItem'),
        },
        {
            key: 15,
            name: 'Lorem Ipsum  de ell more',
            icon: require('../../assets/house.jpg'),
            rate: '$10/day • $50/week • $90/month',
            onPress: () => navigation.navigate('specialItem'),
        },
        {
            key: 16,
            name: 'Lorem Ipsum sit de ell more',
            icon: require('../../assets/carsmodel.jpg'),
            rate: '$10/day • $50/week • $90/month',
            onPress: () => navigation.navigate('specialItem'),
        },
    ];

    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={item?.onPress}
            style={{ width: "20%", justifyContent: "center", alignItems: "center" }}>
            <Image
                resizeMode="contain"
                source={item.icon} />
            <Text style={Styles.toptext}>{item.name}</Text>
        </TouchableOpacity>

    )

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
    const renderpupolerDataItem2 = ({ item, index }) => {
        let a = false
        if (index == 2 || index == 3) {
            a = true
        }
        if (index == 0) {
            return (
                <TouchableOpacity onPress={item?.onPress}
                    style={{
                        backgroundColor: COLORS.white,
                        borderRadius: 15,
                        width: '48%',
                        marginRight: 16,
                    }}>
                    <View style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, justifyContent: "center", alignItems: 'center', padding: '6%', }}>
                        <Image
                            resizeMode='contain'
                            source={item.icon}
                            style={{ width: 100, height: 150 }} />
                    </View>
                    <View style={{ backgroundColor: COLORS.blue, flex: 1, justifyContent: "center", alignItems: "center", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, }}>
                        <Text style={{ textAlign: "center", color: "#fff" }}>
                            {item.name}</Text>
                    </View>
                </TouchableOpacity>)
        }
        else {
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
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={[GolbalStyle.maincontainer]}>
            <View>
                <View style={{ backgroundColor: "#fff", paddingHorizontal: 16, paddingTop: 24, paddingBottom: 16 }}>
                    <View style={{ flexDirection: "row", borderRadius: 10, justifyContent: "space-between", backgroundColor: COLORS.grayLight, }}>
                        <View style={{ flexDirection: "row", paddingHorizontal: 16 }}>
                            <View style={{ justifyContent: "center" }}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../assets/icons/search.png')} />
                            </View>
                            <View style={{ width: "85%" }}>
                                <TextInput
                                    style={{ justifyContent: "center", marginLeft: 6 }}
                                    placeholder='Search kerra'
                                />
                            </View>
                            <View style={{ justifyContent: "center", paddingLeft: 12 }}>
                                <Image
                                    style={{ width: 16, height: 24 }}
                                    source={require('../assets/icons/speaker.png')} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#fff", paddingBottom: 16, }}>
                    <FlatList
                        data={category}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => item.key}
                        numColumns={5}
                    />
                </View>

            </View>

            <ScrollView>
                <View style={{ paddingHorizontal: 16, }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: 6 }}>
                        <Text style={Styles.title}>Trending Now</Text>
                        <Text style={Styles.seemore}>See More</Text>
                    </View>

                    <FlatList
                        scrollEnabled={false}
                        nestedScrollEnabled={true}
                        data={pupolerData}
                        renderItem={renderpupolerDataItem}
                        listkey={(item, index) => item.key}
                        numColumns={2}
                    />
                </View>

                <View style={GolbalStyle.bainer}>
                    <Image
                        source={require("../../assets/baner.jpg")}
                    />
                </View>
                
                <View style={{ paddingHorizontal: 16, }}>
                    {Object.keys(alldata).map((item, key) => {
                        const a = item.toString()
                        return (
                            <View style={{ marginVertical: 16, }}>
                                <FlatList
                                    scrollEnabled={false}
                                    nestedScrollEnabled={true}
                                    data={alldata[item]}
                                    renderItem={renderpupolerDataItem2}
                                    listkey={(item, index) => 'key' + index}
                                    numColumns={2}
                                />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const Styles = StyleSheet.create({
    toptext: {
        fontSize: 10,
        paddingTop: 5,
        fontFamily: FONTS.poppinsMedium,
        fontStyle: 'normal',
        color: COLORS.grayDark,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: COLORS.black,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 18,
        lineHeight: 27,
        fontStyle: 'normal',
        marginTop: 12,
    },
    seemore: {
        color: COLORS.blue,
        fontFamily: FONTS.poppinsMedium,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        marginTop: 20,
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