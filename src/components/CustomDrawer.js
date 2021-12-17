import React from 'react';
import { Divider, } from 'react-native-paper';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, } from 'react-native';
import { COLORS, FONTS } from '../constants';
import DrawerData from './drawerData';


const CustomDrawer = ({ props, navigation }) => {
    return (
        <View style={{ flex: 1, borderTopLeftRadius: 40, borderBottomLeftRadius: 40,}}>
            <ScrollView>
                <View style={{ flex: 1, marginTop: 48, paddingHorizontal: 16, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='ALL CATEGORIES'
                        onPress={() => navigation.navigate('Home')}
                        icon={require('../assets/icons/window.png')}
                        subtext='(220)'
                    />
                </View>

                <View style={{flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='VEHICLE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/car.png')}
                        subtext='(10)'
                    />
                </View>

                <View style={{flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='CAMERA'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/camera.png')}
                        subtext='(15)'
                    />
                </View>

                <View style={{flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='HOUSE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/home.png')}
                        subtext='(20)'
                    />
                </View>

                <View style={{flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='LAPTOP'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/laptop.png')}
                        subtext='(25)'
                    />
                </View>

                <View style={{flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='VEHICLE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/car.png')}
                        subtext='(30)'
                    />
                </View>

                <View style={{flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='CAMERA'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/camera.png')}
                        subtext='(35)'
                    />
                </View>

                <View style={{flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='HOUSE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/home.png')}
                        subtext='(40)'
                    />
                </View>

                <View style={{flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='LAPTOP'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/laptop.png')}
                        subtext='(45)'
                    />
                </View>

                <Divider style={{ borderWidth: 1, borderColor: COLORS.grayLight, marginTop: '20%' }} />
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 20, paddingVertical: 24, }}>
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='Pomona, CA'
                        icon={require('../assets/icons/location.png')}
                    />
                </View>

            </ScrollView>
        </View>
    );
};

export default CustomDrawer;