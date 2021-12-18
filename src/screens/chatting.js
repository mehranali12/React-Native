import React, { useState } from 'react';
import {
    FlatList, Image, Text, TextInput,
    TouchableOpacity, View
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {
    chatting
} from '../data/data';
import Feather from 'react-native-vector-icons/Feather'
export default function Chatting({ navigation }) {
    const mainDarkerColor = 'green';
    const mainLighterColor = '#fff';
    const textLighterColor = '#fff';
    const textColor = '#fff';
    const textOffColor = 'black';
    const textDarkBluishColor = 'black';
    const backgroundColor = '#fff';
    const backgroundDarkerColor = '#E5E5E5';
    const backgroundBlueColor = 'black';
    const modalBorderDarkerColor = '#fff'

    const [showMoreOpions, ChangeShowMoreOpions] = useState(false);

    function Renderchatting({ item, index }) {
        const { isMyMessage, type, imagePath, time, message, senderProfilePicPath } = item;
        return (
            <>
                {isMyMessage && type == 'text' && (
                    <View
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 10,

                            borderColor: 'red',
                            borderWidth: 0,
                        }}>
                        <View
                            style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    borderColor: 'red',
                                    borderWidth: 0,
                                }}>
                                <View
                                    style={{
                                        marginLeft: 10,
                                        backgroundColor: mainDarkerColor,
                                        paddingLeft: 16,
                                        paddingRight: 30,
                                        paddingTop: 16,
                                        paddingBottom: 25,
                                        borderRadius: 16,
                                    }}>
                                    <Text style={{ color: 'white' }}>{message}</Text>
                                    <View
                                        style={{
                                            borderColor: 'red',
                                            borderWidth: 0,
                                            position: 'absolute',
                                            bottom: 6,
                                            right: 12,
                                        }}>
                                        <Text
                                            style={{
                                                marginLeft: 20,
                                                fontSize: 12,
                                                color: textLighterColor,
                                            }}>
                                            {time}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                {!isMyMessage && type == 'text' && (
                    <View
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            padding: 10,
                            paddingTop: chatting[index + 1]?.isMyMessage == false ? 0 : 10,
                        }}>
                        <View
                            style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                            {!chatting[index + 1]?.isMyMessage == false ||
                                chatting[index + 1]?.isMyMessage == null ? (
                                
                               <Image source={require('../assets/images/profile.jpg')} style={{width:50 , height:50 , borderRadius:100}}  />
                            ) : (
                                <View style={{ width: 50 }}></View>
                            )}
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    borderColor: 'red',
                                    borderWidth: 0,
                                }}>
                                <View
                                    style={{
                                        marginLeft: 10,
                                        backgroundColor: backgroundDarkerColor,
                                        paddingLeft: 16,
                                        paddingRight: 30,
                                        paddingTop: 16,
                                        paddingBottom: 25,
                                        borderRadius: 16,
                                    }}>
                                    <Text
                                        style={{
                                            color: backgroundBlueColor,
                                        }}>
                                        {message}
                                    </Text>
                                    <View
                                        style={{
                                            borderColor: 'red',
                                            borderWidth: 0,
                                            position: 'absolute',
                                            bottom: 6,
                                            right: 12,
                                        }}>
                                        <Text
                                            style={{
                                                marginLeft: 20,
                                                fontSize: 12,
                                                color: textOffColor,
                                            }}>
                                            {time}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                {isMyMessage && type == 'image' && (
                    <View
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 10,

                            borderColor: 'red',
                            borderWidth: 0,
                        }}>
                        <View
                            style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                }}>
                                <View
                                    style={{
                                        width: 130,
                                        height: 170,
                                        borderRadius: 20,
                                        backgroundColor: 'silver',
                                        alignSelf: 'flex-end',
                                        overflow: 'hidden',
                                    }}>
                                    <Image
                                        source={imagePath}
                                        resizeMode="cover"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderColor: 'silver',
                                            alignSelf: 'flex-end',
                                        }}
                                    />
                                    <View
                                        style={{
                                            borderColor: 'red',
                                            borderWidth: 0,
                                            position: 'absolute',
                                            bottom: 6,
                                            right: 12,
                                        }}>
                                        <Text
                                            style={{
                                                marginLeft: 20,
                                                fontSize: 12,
                                                color: textLighterColor,
                                            }}>
                                            {time}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                {!isMyMessage && type == 'image' && (
                    <View
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            padding: 10,
                            paddingTop: chatting[index + 1]?.isMyMessage == false ? 0 : 10,
                        }}>
                        <View
                            style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                            {!chatting[index + 1]?.isMyMessage == false ||
                                chatting[index + 1]?.isMyMessage == null ? (
                                null
                                // <Avatar
                                //     // onPress={() => { }}
                                //     rounded
                                //     source={senderProfilePicPath}
                                //     size="medium"
                                // />
                            ) : (
                                <View style={{ width: 50 }}></View>
                            )}
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                }}>
                                <View
                                    style={{
                                        width: 130,
                                        height: 170,
                                        borderRadius: 20,
                                        backgroundColor: 'silver',
                                        alignSelf: 'flex-start',
                                        overflow: 'hidden',
                                        marginLeft: 10,
                                    }}>
                                    <Image
                                        source={imagePath}
                                        resizeMode="cover"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderColor: 'silver',
                                            alignSelf: 'flex-end',
                                        }}
                                    />
                                    <View
                                        style={{
                                            borderColor: 'red',
                                            borderWidth: 0,
                                            position: 'absolute',
                                            bottom: 6,
                                            right: 12,
                                        }}>
                                        <Text
                                            style={{
                                                marginLeft: 20,
                                                fontSize: 12,
                                                color: textLighterColor,
                                            }}>
                                            {time}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            </>
        );
    }
    return (
        <View style={{ backgroundColor: backgroundDarkerColor, flex: 1 }}>

            <View
                style={{
                    flexDirection: 'row',
                    borderColor: 'red',
                    borderWidth: 0,
                    backgroundColor,
                    paddingBottom: 14,
                    paddingVertical: 18,
                    backgroundColor: "#fff",

                }}>
                <View
                    style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 100,
                            backgroundColor: "rgba(0,0,0,0.3)",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 1
                        }}>
                        <MaterialIcons name='keyboard-arrow-left' color="#fff" size={30} />

                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 5,
                        borderColor: 'red',
                        borderWidth: 0,
                        justifyContent: 'flex-end',
                    }}>
                    <Text
                        style={{
                            fontSize: 26,
                            fontWeight: '500',
                            color: textDarkBluishColor,
                        }}>
                        Komail Abbas
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderColor: 'red',
                            borderWidth: 0,
                            justifyContent: 'flex-start',
                        }}>
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: 'normal',
                                color: textDarkBluishColor,
                                textAlign: 'center',
                                marginRight: 5,
                            }}>
                            May 23 | May 24
                        </Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    borderColor: 'red',
                    borderWidth: 0,
                    marginTop: 2,
                    backgroundColor,
                }}>
                <FlatList
                    data={chatting}
                    renderItem={Renderchatting}
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={false}
                    inverted
                // ListEmptyComponent={RenderEmptyListComponent()}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    paddingBottom: 6,
                    backgroundColor
                }}>
                <View
                    style={{
                        borderColor: 'red',
                        borderWidth: 0,
                        // width: 100,
                        paddingHorizontal: showMoreOpions ? 6 : 0,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                    {showMoreOpions ? (
                        <>
                            <TouchableOpacity
                                style={{ borderColor: 'red', borderWidth: 0, marginLeft: 4 }}>
                                <Entypo
                                    name="image"
                                    color={textDarkBluishColor}
                                    size={20}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ borderColor: 'red', borderWidth: 0, marginLeft: 6 }}>
                                <EvilIcons
                                    name="camera"
                                    color={textDarkBluishColor}
                                    size={32}
                                />
                            </TouchableOpacity>
                        </>
                    ) : (
                        <TouchableOpacity
                            style={{ borderColor: 'red', borderWidth: 0 }}
                            onPress={() => ChangeShowMoreOpions(true)}
                        >
                            <Entypo
                                name="chevron-small-right"
                                color={textDarkBluishColor}
                                size={40}
                            />
                        </TouchableOpacity>
                    )}
                </View>
                <View style={{ flex: 1, borderColor: 'red', borderWidth: 0 }}>
                    <TextInput
                        onChangeText={() => {
                            ChangeShowMoreOpions(false);
                        }}
                        placeholder="Enter Message..."
                        placeholderTextColor={'black'}
                        style={{
                            backgroundColor: backgroundColor,
                            zIndex: 10,
                            height: 44,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 25,
                            paddingLeft: 16,
                            color: 'black',
                            fontSize: 16,
                        }}
                    />
                </View>
                <View
                    style={{
                        borderColor: 'red',
                        borderWidth: 0,
                        paddingHorizontal: 16,
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity>
                      <Feather name='send' size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

