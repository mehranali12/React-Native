import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions, Animated } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../utils/animations';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 4 / 4);


const images = [
    require("../../assets/carsmodel.jpg"),
    require("../../assets/car.jpg"),
    require("../../assets/car2.jpg"),
    require("../../assets/carsmodel.jpg"),
    require("../../assets/carsmodel.jpg"),
    require("../../assets/car.jpg"),
    require("../../assets/car2.jpg"),
    require("../../assets/carsmodel.jpg"),
];

export default class slider extends React.Component {
    state = {
        index: 0
    }
    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this)
    }
    _renderItem({ item, image, index }) {
        console.log("ma images ho.....", index);
        return (
            <View key={index} style={styles.itemContainer}>
                <Image style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT,}}
                     source={item}
                />
            </View>
        );
    }
    render() {
        return (
            <View>
                <Carousel
                    ref={(c) => this.carousel = c}
                    data={images}
                    renderItem={this._renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    containerCustomStyle={styles.carouselContainer}
                    inactiveSlideShift={0}
                    onSnapToItem={(index) => this.setState({ index })}
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={animatedStyles}
                    useScrollView={true}
                    // hasParallaxImages={true}
                >
                    {images.map((image, index) => this._renderItem(image, index))}
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
    carouselContainer: {
      
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
    },
});