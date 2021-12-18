import React, { useState } from 'react';
import { Divider, } from 'react-native-paper';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, Modal, Linking, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants';
import DrawerData from './drawerData';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const CustomDrawer = ({ props, navigation }) => {
    const [showDia, setShowDia] = React.useState(false);
    const [lat, setlat] = useState(33.6844)
    const [long, setlong] = useState(73.0479)
    const [marg, setMarg] = React.useState(1);
    return (
        <View style={{ flex: 1, borderTopLeftRadius: 40, borderBottomLeftRadius: 40, }}>
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

                <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='VEHICLE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/car.png')}
                        subtext='(10)'
                    />
                </View>

                <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='CAMERA'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/camera.png')}
                        subtext='(15)'
                    />
                </View>

                <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='HOUSE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/home.png')}
                        subtext='(20)'
                    />
                </View>

                <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='LAPTOP'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/laptop.png')}
                        subtext='(25)'
                    />
                </View>

                <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='VEHICLE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/car.png')}
                        subtext='(30)'
                    />
                </View>

                <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='CAMERA'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/camera.png')}
                        subtext='(35)'
                    />
                </View>

                <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='HOUSE'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/home.png')}
                        subtext='(40)'
                    />
                </View>

                <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 24, }} >
                    <DrawerData
                        style={{ color: COLORS.grayDark, }}
                        text='LAPTOP'
                        onPress={() => navigation.navigate('searchCategory')}
                        icon={require('../assets/icons/laptop.png')}
                        subtext='(45)'
                    />
                </View>



            </ScrollView>
            <Divider style={{ borderWidth: 1, borderColor: COLORS.grayLight, marginBottom: '3%' }} />
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 12 }}>
                <DrawerData
                    style={{ color: COLORS.grayDark, }}
                    text='Pomona, CA'
                    icon={require('../assets/icons/location.png')}
                    onPress={() => setShowDia(true)}
                />
            </View>
            <Modal visible={showDia}>
                <View style={{ flex: 1 }}>
                    <MapView
                        style={[styles.map, { marginBottom: marg, marginTop: 0 }]}
                        initialRegion={{
                            latitude: lat,
                            longitude: long,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        autoFocus={true}
                        onPress={e => {
                            setlat(e.nativeEvent.coordinate.latitude);
                            setlong(e.nativeEvent.coordinate.longitude);
                        }}
                        onMapReady={() => setMarg(0)}>

                        <Marker
                            coordinate={{
                                latitude: lat,
                                longitude: long,
                            }}
                        />
                    </MapView>
                    <View
                        style={{
                            position: 'absolute', //use absolute position to show button on top of the map
                            marginTop: 10,
                            alignSelf: 'center',
                            Top: 10,
                        }}>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#FFFEFA00',
                                width: '100%',
                                borderRadius: 10,
                                justifyContent: 'center',
                                marginTop: 10,
                            }}
                            onPress={() => {
                                Linking.openURL(
                                    `https://www.google.com/maps/@${lat},${long},14z`,
                                );
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    color: '#000',
                                }}>
                                Go to Google
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            position: 'absolute', //use absolute position to show button on top of the map
                            marginTop: 50,
                            alignSelf: 'center',
                            bottom: 40,
                        }}>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#FFFEFA',
                                alignSelf: 'center',
                                alignContent: 'center',
                                width: 100,
                                height: 45,
                                borderRadius: 10,
                                justifyContent: 'center',
                            }}
                            onPress={() => setShowDia(false)}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    color: '#000',
                                }}>
                                Done
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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