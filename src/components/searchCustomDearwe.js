import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { COLORS } from '../constants';
import DrawerData from './drawerData';

const CustomDrawer = ({ props, navigation }) => {
    const [showDia, setShowDia] = React.useState(false);
    const [lat, setlat] = useState(33.6844)
    const [long, setlong] = useState(73.0479)
    const [marg, setMarg] = React.useState(1);
    const [selected, setselected] = useState(['audi', 'Modal 2018'])
    const [list, setlist] = useState([
        {
            title: "Modal 2018"
        },
        {
            title: "audi"
        },
        {
            title: "Engine"
        },
        {
            title: "ETC"
        },
        {
            title: "Automatic Climate Control"
        },
        {
            title: "Touchscreen infotainment system."
        },
        {
            title: "Keyless Entry & Push Button Start/Stop"
        },
        {
            title: "Fast USB Charging Outlets & Wireless Charger"
        },
        {
            title: "APPLE CARPLAY AND ANDROID AUTO"
        },
        {
            title: "Tesla."
        },
        {
            title: "BMW"
        },


    ])
    return (
        <View style={{ flex: 1, borderTopLeftRadius: 40, borderBottomLeftRadius: 40, }}>
            <ScrollView>
                <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='VEHICLE'
                        onPress={() => navigation.
                            navigate('searchCategory')}
                        icon={require('../assets/icons/car.png')}
                        subtext='(10)'
                    />
                  
                    {
                        list.map((item, key) => {
                            return (
                                <View key={key} style={{ flexDirection: 'row', marginTop: 12, width: '90%' ,marginLeft:-6 }}>
                                    <Checkbox
                                        status={selected.includes(item.title) ? 'checked' : 'unchecked'}
                                        color={COLORS.green}
                                        uncheckedColor={COLORS.secondaryDark}
                                        onPress={() => {
                                            if (selected.includes(item.title)) {
                                                setselected(selected.filter(obj => obj != item.title))
                                            } else {
                                                setselected(selected.concat(item.title))
                                            }
                                        }}
                                    />
                                    <View style={{ justifyContent: "center" }}>
                                        <Text numberOfLines={2}>{item.title}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>


            </ScrollView>
        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        // width: Dimensions.get("window").width,
        // height: Dimensions.get("window").height
    },
});