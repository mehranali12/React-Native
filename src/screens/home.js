import React from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, } from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { GolbalStyle } from "../utils/GlobalStyles";
import {
    category,
    allProduct,
    trendingProduct
} from '../data/data'


const renderAllProduct = ({ item, index }) => {
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
                <View style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, justifyContent: "center", alignItems: 'center', padding: '6%', width: '100%', height: 150, }}>
                    <Image
                        resizeMode='contain'
                        source={item.icon}
                        style={{ width: '60%', height: '50%' }}
                    />
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

                <View style={{ flex: 1, }}>
                    <Text style={Styles.ImageBackgroundText}>
                        {item.name}
                    </Text>
                    <Text style={[Styles.ImageBackgroundSubText]}>
                        {item.rate}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
export default function Home({ navigation }) {
    const renderTrending = ({ item, index }) => {
        let a = true
        if (index == 1 || index == 0) {
            a = false
        }
        return (
            <TouchableOpacity onPress={() => navigation.navigate('productDetail')}
                style={{
                    // flex:1,
                    backgroundColor: COLORS.white,
                    borderRadius: 15,
                    width: '48%',
                    marginRight: 16,
                    marginTop: a == true ? 16 : 0,
                }}>
                <View>
                    <Image
                        imageStyle={{ borderTopRightRadius: 15, borderTopLeftRadius: 15, }}
                        source={item.icon}
                        style={Styles.ImageBackground} />

                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, }}>
                        <Text numberOfLines={2} style={Styles.ImageBackgroundText}>
                            {item.name}</Text>

                    </View>
                    <Text
                        style={Styles.ImageBackgroundSubText}
                    >
                        {item.rate}</Text>
                </View>
            </TouchableOpacity>)
    }

    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => {
            if (index == 4) {
                navigation.openDrawer()
            }
        }

        }
            style={{ width: "20%", justifyContent: "center", alignItems: "center" }}>
            <Image
                resizeMode="contain"
                source={item.icon} />
            <Text style={Styles.toptext}>{item.name}</Text>
        </TouchableOpacity>

    )

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
                        keyExtractor={(item, index) => 'key' + index}

                        numColumns={5}
                    />
                </View>

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 16, }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: 6 }}>
                        <Text style={Styles.title}>Trending Now</Text>
                        <Text style={Styles.seemore}>See More</Text>
                    </View>

                    <FlatList
                        scrollEnabled={false}
                        nestedScrollEnabled={true}
                        data={trendingProduct}
                        renderItem={renderTrending}
                        keyExtractor={(item, index) => 'key1' + index}
                        numColumns={2}
                    />
                </View>

                <View style={GolbalStyle.bainer}>
                    <Image
                        source={require("../../assets/baner.jpg")}
                    />
                </View>

                <View style={{ paddingHorizontal: 16, }}>
                    {Object.keys(allProduct).map((item, key) => {
                        const a = item.toString()
                        return (
                            <View key={key} style={{ marginVertical: 16, }}>
                                <FlatList
                                    scrollEnabled={false}
                                    nestedScrollEnabled={true}
                                    data={allProduct[item]}
                                    renderItem={renderAllProduct}
                                    listKey={(item, index) => `_key${index.toString()}`}
                                    keyExtractor={(item, index) => '_key' + index.toString()}
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
        flex: 1,
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    ImageBackgroundText: {
        flex: 1,
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
        fontSize: 10,
        lineHeight: 15,
        paddingBottom: 10,

    },

});