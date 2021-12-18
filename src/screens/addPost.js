import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, FlatList } from "react-native";
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

    const [imageArray, setdata] = useState([])

    let selectImages = () => {
        const buttons = ['Camera', 'Photo Library', 'Cancel'];
        ActionSheet.show(
            {
                options: buttons,
                cancelButtonIndex: 2,
            },
            buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        takePhotoFromCamera();
                        break;
                    case 1:
                        choosePhotosFromGallery();
                        break;
                    default:
                        break;
                }
            },
        );
    }

    const takePhotoFromCamera = async () => {
        ImagePicker.openCamera({
            cropping: true,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType: 'photo',
        })
            .then(response => {
                console.log('received your image', response);
                var temp = [...imageArray]
                temp.push(response)
                setdata(temp)
            }).catch((e) => console.log('error', error))
    };
    return (
        <View style={GolbalStyle.maincontainer}>
            <View style={GolbalStyle.header}>
                <Text style={GolbalStyle.headertext}>My Posts</Text>
            </View>

            <View style={[Styles.addImagesBox, {height: 85}]}>
                <TouchableOpacity style={{ justifyContent: 'center' }}
                    onPress={takePhotoFromCamera}>
                    <View style={Styles.Image}>
                        <Image source={require('../assets/icons/addcamera.png')} />
                        {/* <Text>{imageArray ? 'Edit' : 'Upload'}</Text> */}
                    </View>
                </TouchableOpacity>

                {/* <View style={Styles.Image}>
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
                    </View>  */}

                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={imageArray}
                    renderItem={({ item, index }) => {
                        return (
                            <Image source={{ uri: item.path }}
                                key={index}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 15,
                                    resizeMode: 'contain',
                                    marginLeft: 16,
                                    marginVertical: 14,
                                }} />
                        )
                    }}
                    // renderItem={renderItem}
                    keyExtractor={(item, index) => 'key'+index}
                />

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[Styles.addImagesBox, { height: 48, }]}>
                    <TextInput
                        style={[Styles.buttonText, { color: COLORS.grayDark, width: '100%' }]}
                        placeholder="Title"
                    />
                </View>

                <View style={[Styles.addImagesBox], { marginHorizontal: 16, marginTop: 16, height: 48, }}>
                    <Picker />
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