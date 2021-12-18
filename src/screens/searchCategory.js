import React, { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import TopMenuButton from "../components/topMenuButton";
import { COLORS } from '../constants/colors';
import { GolbalStyle } from "../utils/GlobalStyles";


export default function searchCategory({ navigation }) {
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
    const [show, setshow] = useState(true)

    const renderBox = ({ item, index }) => {
        let showBanner = false
        if (index % 2 == 0) {
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
    return (
        <View style={[GolbalStyle.maincontainer]}>

            <View style={{ backgroundColor: COLORS.white, paddingHorizontal: 16, }}>
                <View style={{ flexDirection: "row", marginTop: 24, paddingBottom: 12 }}>
                    <View style={{ borderRadius: 10, backgroundColor: COLORS.grayLight, height: 45, flex: 1, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ justifyContent: "center", alignItems: 'center', paddingLeft: 16, flexDirection: 'row', }}>
                                <TouchableOpacity
                                    style={{ zIndex: 1 }}
                                    onPress={() => navigation.goBack()}>
                                    <Image

                                        source={require('../assets/icons/leftArrow.png')}
                                    />
                                </TouchableOpacity>
                                <TextInput
                                    style={{ justifyContent: "center", marginLeft: 12 }}
                                    placeholder='Search Vehicles'
                                />
                            </View>

                            <View style={{ justifyContent: 'center', backgroundColor: COLORS.green, borderTopRightRadius: 10, borderBottomRightRadius: 10, height: 45, width: '12%', alignItems: "center" }}>
                                <Image
                                    resizeMode="contain"
                                    // style={{ height: 40, width: 40, }}
                                    source={require('../assets/icons/level.png')} />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{ justifyContent: 'center', marginLeft: 12 }}>
                        <Image source={require('../assets/icons/window.png')} style={{ alignSelf: "center" }} />

                    </TouchableOpacity>
                </View>
                {show && (
                    <View style={[GolbalStyle.TopMenuButtonDiv, {  }]}>
                        <TopMenuButton tittle='Model' style={[GolbalStyle.TopMenuButtonDivText, {}]} />
                        <TopMenuButton tittle='Price' style={GolbalStyle.TopMenuButtonDivText} />
                        <TopMenuButton tittle='Make' style={GolbalStyle.TopMenuButtonDivText} />
                        <TouchableOpacity
                            onPress={() => setshow(false)}
                            style={{ justifyContent: "center" }}>
                            <Entypo name='cross' color={'black'} size={24} />
                        </TouchableOpacity>

                    </View>


                )}




            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={category}
                renderItem={renderBox}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}