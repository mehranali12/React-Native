import React from "react";
import { View, Text, TextInput, StyleSheet, Image, FlatList, TouchableOpacity, } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { ScrollView } from "react-native-gesture-handler";
import { GolbalStyle } from "../utils/GlobalStyles";


export default function searchCategory({ navigation }) {
    const category = [
        {
            id: 1,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 2,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 3,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 4,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 5,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 6,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 7,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 8,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 9,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 10,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 11,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 12,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        }, {
            id: 13,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 14,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
        {
            id: 15,
            name: 'Item 1',
            icon: require('../../assets/carsmodel.jpg'),
            day: 'Mon',
            p1: 'Person 1',
            p2: 'Hello there, Hope you are doing well...',
            image: require('../assets/icons/rightErrow.png'),
        },
    ];

    const renderBox = (item, index) => {
        return (
            <View style={{ paddingHorizontal: 16, marginBottom: 16}}>
                <View style={{}} key={index}>
                    <TouchableOpacity
                        style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 15, height: 94 }}>
                        <Image
                            style={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8, height: 93, width: '25%' }}
                            resizeMode="cover"
                            source={item.icon}
                        />
                        <View style={{ paddingHorizontal: '3%', paddingVertical: '3%', flex: 1, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16, }}>{item.name}</Text>
                                <Text style={{}}>{item.day}</Text>
                            </View>
                            <Text style={{ marginTop: 6, fontSize: 14, }}>{item.p1}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ marginTop: 8, fontSize: 10 }}>{item.p2}</Text>
                                <Image
                                    style={{ height: 16, width: 10, alignSelf: 'center', }}
                                    source={item.image}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )

    }
    return (
        <View style={[GolbalStyle.maincontainer]}>

            <View style={Styles.header}>
                <Text style={GolbalStyle.headertext}>My Messages</Text>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ paddingRight: 16 }}>
                        <Image source={require('../assets/icons/message.png')}
                            style={{ height: 18, width: 24, }}
                        />
                    </View>
                    <View style={{ borderRightWidth: 1, marginRight: 16, }} />
                    <View style={{ flexDirection: "row", }}>
                        <Image source={require('../assets/icons/delete.png')}
                            style={{ height: 18, width: 24, }}
                        />
                    </View>
                </View>
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
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
    header: {
        height: 70,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
});