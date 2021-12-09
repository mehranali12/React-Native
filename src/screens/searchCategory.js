import React from "react";
import { View, Text, TextInput, StyleSheet, Image, FlatList, TouchableOpacity, } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TopMenuButton from "../components/topMenuButton";
import { ScrollView } from "react-native-gesture-handler";
import { GolbalStyle } from "../utils/GlobalStyles";


export default function searchCategory({ navigation }) {
    const category = [
        {
            id: 1,
            name: 'Toyota Corolla',
            icon: require('../../assets/carsmodel.jpg'),
            time: '2h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day'
        },
        {
            id: 2,
            name: 'Toyota Corolla',
            icon: require('../../assets/camera1.jpg'),
            time: '1h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day'
        },
        {
            id: 1,
            name: 'Toyota Corolla',
            icon: require('../../assets/carsmodel.jpg'),
            time: '2h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day'
        },
        {
            id: 2,
            name: 'Toyota Corolla',
            icon: require('../../assets/camera1.jpg'),
            time: '1h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day'
        },
        {
            id: 1,
            name: 'Toyota Corolla',
            icon: require('../../assets/carsmodel.jpg'),
            time: '2h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day'
        },
        {
            id: 2,
            name: 'Toyota Corolla',
            icon: require('../../assets/camera1.jpg'),
            time: '1h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day'
        },
    ];

    const renderBox = (item, index) => {
        let showBanner = false
        if (index % 2 == 0) {
            showBanner = true
        }
        return (
            <View key={index}>
                {showBanner ? (
                    <Image
                        style={{ marginVertical: 12 }}
                        source={require("../../assets/baner.jpg")}
                    />
                ) : null}

                <TouchableOpacity
                    style={{ flexDirection: "row", marginTop: 12, backgroundColor: "#fff", marginHorizontal: 12, borderRadius: 15, height: 150 }}
                >
                    <Image
                        style={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8, height: 150, width: '48%' }}
                        resizeMode="cover"
                        source={item.icon} />
                    <View style={{ flexDirection: "row", padding: "3%", justifyContent: "space-between", flex: 1 }}>
                        <View>
                            <Text>{item.name}</Text>
                            <Text style={{ marginTop: 14 }}>{item.p1}</Text>
                            <Text style={{ marginTop: 14, marginBottom: 14 }}>{item.p2}</Text>
                            <Text>{item.p3}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16 }}>{item.time}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
    return (
        <View style={[GolbalStyle.maincontainer]}>

            <View style={{ backgroundColor: COLORS.white, paddingVertical: 16, paddingHorizontal: 16, }}>
                <View style={{ flexDirection: "row", borderRadius: 10, justifyContent: "space-between", backgroundColor: COLORS.grayLight, }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 16, }}>
                        <View style={{ justifyContent: "center" }}>
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={require('../assets/icons/search.png')} />
                        </View>
                        <View style={{ width: "85%" }}>
                            <TextInput
                                style={{ justifyContent: "center", marginLeft: 6 }}
                                placeholder='Search Vehicles'
                            />
                        </View>
                        <View style={{ width: 20, height: 48, width: 35, justifyContent: "center", backgroundColor: COLORS.green, borderTopRightRadius: 15, borderBottomRightRadius: 15, }}>
                            <Image
                                style={{ width: 20, height: 20, alignSelf: 'center' }}
                                source={require('../assets/icons/level.png')} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={GolbalStyle.TopMenuButtonDiv}>
                <TopMenuButton tittle='Model' style={[GolbalStyle.TopMenuButtonDivText, {}]} />
                <TopMenuButton tittle='Price' style={GolbalStyle.TopMenuButtonDivText} />
                <TopMenuButton tittle='Make' style={GolbalStyle.TopMenuButtonDivText} />
            </View>

            <ScrollView>
                {
                    category.map((item, index) => {
                        return renderBox(item, index)
                    })
                }
            </ScrollView>

        </View>
    );
}


const Styles = StyleSheet.create({
});