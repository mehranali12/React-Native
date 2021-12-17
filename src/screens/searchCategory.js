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
            p3: '$10/day',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 2,
            name: 'Toyota Corolla',
            icon: require('../../assets/camera1.jpg'),
            time: '1h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 1,
            name: 'Toyota Corolla',
            icon: require('../../assets/carsmodel.jpg'),
            time: '2h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 2,
            name: 'Toyota Corolla',
            icon: require('../../assets/camera1.jpg'),
            time: '1h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 1,
            name: 'Toyota Corolla',
            icon: require('../../assets/carsmodel.jpg'),
            time: '2h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 2,
            name: 'Toyota Corolla',
            icon: require('../../assets/camera1.jpg'),
            time: '1h',
            p1: '$10/day',
            p2: '$10/day',
            p3: '$10/day',
            image: require('../assets/icons/rightErrow.png'),
        },
    ];

    const renderBox = (item, index) => {
        let showBanner = false
        if (index % 2 == 0) {
            showBanner = true
        }
        return (
            <View key={index} style={{}}>
                {
                    showBanner ? (
                        <Image
                            style={{ marginTop: 16 }}
                            source={require("../../assets/baner.jpg")}
                        />
                    ) : null
                }

                <View style={{ flexDirection: "row", marginTop: 16, backgroundColor: "#fff", marginHorizontal: 12, borderRadius: 15, height: 150, elevation: 3,}}>
                    <Image
                        style={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8, height: 150, width: '48%' }}
                        resizeMode="cover"
                        source={item.icon}
                    />
                    <View style={{ padding: "3%", flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>{item.name}</Text>
                            <View>
                                <Text style={{ fontSize: 16 }}>{item.time}</Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: 14 }}>{item.p1}</Text>
                        <Text style={{ marginTop: 14, marginBottom: 14 }}>{item.p2}</Text>

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
    return (
        <View style={[GolbalStyle.maincontainer]}>

            <View style={{ backgroundColor: COLORS.white, paddingHorizontal: 16, }}>

                <View style={{ borderRadius: 10, backgroundColor: COLORS.grayLight, marginTop: 24, height: 55, marginHorizontal: 16, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <View style={{ justifyContent: "center", alignItems: 'center', paddingLeft: 16, flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image
                                    style={{}}
                                    source={require('../assets/icons/leftArrow.png')}
                                />
                            </TouchableOpacity>
                            <TextInput
                                style={{ justifyContent: "center", marginLeft: 12 }}
                                placeholder='Search Vehicles'
                            />
                        </View>

                        <View style={{ justifyContent: 'center', backgroundColor: COLORS.green, borderTopRightRadius: 15, borderBottomRightRadius: 15, height: 55 }}>
                            <Image
                                style={{ height: 40, width: 40, }}
                                source={require('../assets/icons/level.png')} />
                        </View>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[GolbalStyle.TopMenuButtonDiv, { marginTop: 16, marginBottom: -16, }]}>
                        <TopMenuButton tittle='Model' style={[GolbalStyle.TopMenuButtonDivText, {}]} />
                        <TopMenuButton tittle='Price' style={GolbalStyle.TopMenuButtonDivText} />
                        <TopMenuButton tittle='Make' style={GolbalStyle.TopMenuButtonDivText} />
                    </View>
                    {
                        category.map((item, index) => {
                            return renderBox(item, index)
                        })
                    }
                </ScrollView>

            </View>
        </View>
    );
}