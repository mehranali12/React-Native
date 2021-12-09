import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextButton from "../components/TextButton";
import { GolbalStyle } from "../utils/GlobalStyles";


export default function list({ navigation }) {
    const [show, setshow] = useState(true)
    return (
        <View style={GolbalStyle.maincontainer}>

            <View style={Styles.header}>
                <Text style={Styles.headertext}>My Listings</Text>
            </View>

            <View style={Styles.headButon}>
                <TouchableOpacity onPress={() => setshow(true)} style={{ backgroundColor: show ? COLORS.blue : COLORS.gray, width: "50%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={[GolbalStyle.buttonText, { color: show ? COLORS.white : 'black' }]}>Borrowing</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setshow(false)} style={{ backgroundColor: show ? COLORS.gray : COLORS.blue, width: "50%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={[GolbalStyle.buttonText, { color: show == false ? COLORS.white : 'black' }]}>Lending</Text>
                </TouchableOpacity>
            </View>

            {show ? (
                <>
                    <View style={GolbalStyle.centerIcon}>
                        <Image source={require('../assets/icons/centerIcon.png')} />
                    </View>

                    <View style={{ marginTop: 44, }} />
                    <TextButton
                        style={{ color: COLORS.white, fontSize: 18, lineHeight: 27, }}
                        text='Add your first item +'
                    // onPress={() => navigation.navigate('Home')}
                    />
                </>
            ) :
                <Text style={{textAlign: 'center', marginTop: 100,}}>The Data is render here</Text>
            }

        </View>
    );
}


const Styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        justifyContent: 'center'
    },
    headertext: {
        color: COLORS.black,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 20,
        lineHeight: 30,
        fontStyle: 'normal',
    },
    headButon: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        elevation: 5,
    },
    button: {
        height: 48,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});