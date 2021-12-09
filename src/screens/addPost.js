import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, imageCaption } from "react-native";
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import TextButton from "../components/TextButton";
import { GolbalStyle } from "../utils/GlobalStyles";
import ImagePicker from 'react-native-image-crop-picker';
import DropDownPicker from 'react-native-dropdown-picker';

function Picker() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (
        <DropDownPicker
        listMode="SCROLLVIEW"
        scrollViewProps={{
            nestedScrollEnabled: true,
        }}
            showArrowIcon={true}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Category"
            theme="DARK"
            // setOpen={(open) => {
            //     this.setState({ isRFIIROpen: open })
            // }}

            style={{
                backgroundColor: COLORS.white,
                borderColor: 'transparent'
            }}
            placeholderStyle={[Styles.buttonText,
            { color: COLORS.grayDark, alignSelf: 'center' }]}
            arrowIconStyle={{
                width: 20,
                height: 35,
            }}
            dropDownContainerStyle={{
                backgroundColor: COLORS.grayLight,
                borderColor: 'transparent',
                height: 'auto',
              }}
              listItemLabelStyle={{
                color: COLORS.grayDark,
                fontSize: 14,
                fontFamily: FONTS.poppins,
              }}
        />
    );
}


export default function addPost({ navigation }) {

    const [image, setImgPath] = useState(image);

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            cropping: true,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType: 'photo',
        })
            .then(image => {
                console.log('received image', image);
                setImgPath(image.path);
                ChangeShowSafetyCenterPanel(false);
            })
            .catch(e => console.log("simple data..........", e));
    };

    // const takePhotoFromCamera = () => {
    //         let imgData = {
    //         title: imageCaption,
    //         mediaData: mediaData
    //     
    //     ImagePicker.openPicker({
    //         multiple: true,
    //         width: 200,
    //         height: 200,
    //         compressImageMaxHeight: 400,
    //         // includeBase64: true,
    //         compressImageMaxWidth: 400,
    //         cropping: true,
    //     }).then(response => {
    //         console.log('received image', image);
    //         setImgPath(image.path);
    //         ChangeShowSafetyCenterPanel(false);

    //     });
    // };


    return (
        <View style={GolbalStyle.maincontainer}>
            <View style={GolbalStyle.header}>
                <Text style={GolbalStyle.headertext}>My Posts</Text>
            </View>
            <ScrollView vertical={true} style={{ paddingVertical: 1, height: '20%', }}>
                <View style={Styles.addImagesBox}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}
                        onPress={takePhotoFromCamera}
                    >
                        <View style={Styles.Image}>
                            <Image source={require('../assets/icons/addcamera.png')}
                                style={{}}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={Styles.Image}>
                        <Image source={require('../assets/icons/Rectangle.png')}
                            style={{}} />
                    </View>
                    <View style={Styles.Image}>
                        <Image source={require('../assets/icons/Rectangle.png')}
                            style={{}} />
                    </View>
                    <View style={Styles.Image}>
                        <Image source={require('../assets/icons/Rectangle.png')}
                            style={{}} />
                    </View>
                    <View style={Styles.Image}>
                        <Image source={require('../assets/icons/Rectangle.png')}
                            style={{}} />
                    </View>
                </View>
                <View style={[Styles.addImagesBox, { height: 48, }]}>
                    <TextInput
                        style={[Styles.buttonText, { color: COLORS.grayDark, width: '100%' }]}
                        placeholder="Title"
                    />
                </View>
                {/* <View style={[Styles.addImagesBox, { height: 48, }]}>
                    <Text style={[Styles.buttonText, { color: COLORS.grayDark, alignSelf: 'center' }]}>Category</Text>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image source={require('../assets/icons/downErrow.png')}
                                style={{}} />
                        </View>
                    </TouchableOpacity>
                </View> */}

                <View style={[Styles.addImagesBox], { marginHorizontal: 16, marginTop: 16, height: 48, }}>
                    <Picker/>
                </View>


                <View style={[Styles.addImagesBox, {}]}>
                    <TextInput
                        style={[Styles.buttonText, { color: COLORS.grayDark, paddingBottom: 50, width: '100%' }]}
                        placeholder="Description"
                    />
                </View>
                <View style={[Styles.addImagesBox, { height: 48, }]}>
                    <TextInput
                        style={[Styles.buttonText, { color: COLORS.grayDark, width: '100%' }]}
                        placeholder="Location"
                    />
                </View>
                <View style={[Styles.addImagesBox, { height: 48, }]}>
                    <TextInput
                        style={[Styles.buttonText, { color: COLORS.grayDark, width: '100%' }]}
                        placeholder="Phone Number"
                    />
                </View>
                <View style={{ marginTop: 53, marginBottom: 20, }}>
                    <TextButton
                        style={{ color: COLORS.white, fontSize: 18, lineHeight: 27, paddingHorizontal: -15 }}
                        text='Post ad'
                    onPress={() => navigation.navigate('home')}
                    />
                </View>
            </ScrollView>
        </View>
    );
}


const Styles = StyleSheet.create({
    addImagesBox: {
        height: 96,
        marginTop: 16,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    Image: {
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: FONTS.poppins,
        fontSize: 18,
        lineHeight: 27,
        fontStyle: 'normal',
    },
    dropDownStyle:
    {
        marginTop: 2
    }
});