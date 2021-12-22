import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions, Animated } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../utils/animations';
import { COLORS } from "../constants";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 4 / 4);


const images = [
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
    _renderItem({ item, index }) {
        return (
            <View key={index} style={styles.itemContainer}>
                <Image style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, }}
                    source={item}
                />
            </View>
        );
    }
    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={images.length}
                activeDotIndex={this.state.index}
                inactiveDotColor={COLORS.secondaryDark}
                dotColor={COLORS.green}
                dotStyle={{
                    
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    // backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />

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
                    actived
                    onSnapToItem={(index) => this.setState({ index: index }) }
                // hasParallaxImages={true}
                >
                </Carousel>
                <View style={{marginTop:'-15%'}}>

              
                {this.pagination}
                </View>
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