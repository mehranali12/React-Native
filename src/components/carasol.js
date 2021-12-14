import React, {Component} from "react";
import { View, Image, StyleSheet, Dimensions,Animated } from "react-native";
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    require("../../assets/carsmodel.jpg"),
    require("../../assets/carsmodel.jpg"),
    require("../../assets/carsmodel.jpg"),
    require("../../assets/carsmodel.jpg"),
];


export default class slider extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight, }} source={image} />
                <Image source={require('../assets/icons/heart.png')} style={{ height: 24, width: 24, }} />
                <Image source={require('../assets/icons/share.png')} />
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.container, {}]}> 
                <Carousel
                    layout={'tinder'}
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});