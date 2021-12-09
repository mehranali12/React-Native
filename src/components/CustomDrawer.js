import React from 'react';
import {
    Title,
    Caption,
    Divider,
    Drawer,
} from 'react-native-paper';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, } from 'react-native';
import { COLORS, FONTS } from '../constants';
import DrawerData from './drawerData';


const CustomDrawer = ({props, navigation}) => {
    return (
        <View style={{ flex: 1, borderTopLeftRadius: 40, borderBottomLeftRadius: 40, }}>
            <ScrollView>
                <View style={{ marginTop: 48, paddingHorizontal: 16, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark,  }}
                        text='ALL CATEGORIES'
                        onPress={() => navigation.navigate('Home')}
                        icon={require('../assets/icons/window.png')}
                        subtext='(220)'
                    />
                </View>

                <View style={{ marginTop: 24, paddingHorizontal: 16, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='VEHICLE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/car.png')}
                        subtext='(10)'
                    />
                </View>

                <View style={{ marginTop: 24, paddingHorizontal: 16, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='CAMERA'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/camera.png')}
                        subtext='(15)'
                    />
                </View>

                <View style={{ marginTop: 24, paddingHorizontal: 16, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='HOUSE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/home.png')}
                        subtext='(20)'
                    />
                </View>

                <View style={{ marginTop: 24, paddingHorizontal: 16, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='LAPTOP'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/laptop.png')}
                        subtext='(25)'
                    />
                </View>

                <View style={{ marginTop: 24, paddingHorizontal: 16, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='VEHICLE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/car.png')}
                        subtext='(30)'
                    />
                </View>

                <View style={{ marginTop: 24, paddingHorizontal: 16, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='CAMERA'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/camera.png')}
                        subtext='(35)'
                    />
                </View>

                <View style={{ marginTop: 24, paddingHorizontal: 16, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='HOUSE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/home.png')}
                        subtext='(40)'
                    />
                </View>

                <View style={{ marginTop: 24, paddingHorizontal: 16, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='LAPTOP'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/laptop.png')}
                        subtext='(45)'
                    />
                </View>

                <View style={{}}>
                    <Divider style={{ borderWidth: 1, borderColor: COLORS.grayLight, marginTop: 130, }} />
                </View>

                <View style={{ marginTop: 24, paddingHorizontal: 20, flexDirection: 'row'}} >
                    <Image source={require('../assets/icons/location.png')} />
                    <Text style={{marginLeft: 15,  fontSize: 16, lineHeight: 24, fontFamily: FONTS.poppinsMedium, color: COLORS.grayDark, fontStyle: 'normal',}}>Pomona, CA</Text>
                </View>

            </ScrollView>
        </View>
    );
};

export default CustomDrawer;