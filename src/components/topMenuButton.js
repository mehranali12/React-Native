import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function topMenuButton({ tittle, style, }) {
    return (
        <View style={[Styles.maincontainer]}>

            <View style={Styles.buttonDiv}>
                <Text style={Styles.buttonDivText, style}>{tittle}</Text>
            </View>
        </View>
    );
}


const Styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    buttonDiv: {
        paddingHorizontal: 16,
    },
    buttonDivText: {
        borderWidth: 1,
        borderColor: 'red'
    }
});