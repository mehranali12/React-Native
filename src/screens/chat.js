import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from '../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    messages
} from '../data/data';
import { GolbalStyle } from "../utils/GlobalStyles";

export default function searchCategory({ navigation }) {
    const renderBox = (item, index) => {
        return (
            <View key={index} style={{ paddingHorizontal: 16, marginBottom: 16 }}>
                <View >
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('chatting')}
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
                    <View style={{ paddingRight: 16, justifyContent: "center" }}>
                        <Image source={require('../assets/icons/message.png')}
                            style={{ height: 18, width: 24, }}
                        />
                    </View>
                    <View style={{ borderRightWidth: 1, marginRight: 16, }} />
                    <View style={{ flexDirection: "row", }}>
                        <MaterialCommunityIcons name="delete-outline" size={28} color='#8DD061' />
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    messages.map((item, index) => {
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