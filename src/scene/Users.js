import React from "react";
import { Text, View, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';


const Users = () => {

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../asset/Background.png')} resizeMode='cover' style={{ flex: 1, }} >
                <View style={{ flexDirection: 'column', padding: 20, }}>
                    <Text style={{ ...styles.title }}>Pekerjaan</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="briefcase" size={15} color='#05B1A1' />
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <Text style={{ fontSize: 16, color: '#000000' }}>
                                Graphic Design
                            </Text>
                            <Text style={{ fontSize: 14, color: '#000000' }}>
                                Opinia
                            </Text>
                            <Text style={{ fontSize: 14, color: '#000000' }}>
                                (2008-Sekarang)
                            </Text>
                        </View>
                    </View>
                    <View style={{ ...styles.line }}></View>

                    <Text style={{ ...styles.title, marginTop: 10 }}>Tempat Tinggal</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icons name="graduation-cap" size={15} color='#05B1A1' />
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <Text style={{ fontSize: 16, color: '#000000' }}>
                                Design Engineering
                            </Text>
                            <Text style={{ fontSize: 14, color: '#000000' }}>
                                Politeknik Manufaktur negeri Bandung
                            </Text>
                            <Text style={{ fontSize: 14, color: '#000000' }}>
                                (2011-2013)
                            </Text>
                        </View>
                    </View>
                    <View style={{ ...styles.line }}></View>

                    <Text style={{ ...styles.title, marginTop: 10 }}>Pendidikan</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="pin" size={15} color='#05B1A1' />
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <Text style={{ fontSize: 16, color: '#000000' }}>
                                Kota Bekasi
                            </Text>
                            <Text style={{ fontSize: 14, color: '#000000' }}>
                                (2011-2013)
                            </Text>
                        </View>
                    </View>
                    <View style={{ ...styles.line }}></View>


                    <Text style={{ ...styles.title, marginTop: 10 }}>Hobi</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icons name="pen-nib" size={15} color='#05B1A1' />
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <Text style={{ fontSize: 16, color: '#000000' }}>
                                Kota Bekasi
                            </Text>
                            <Text style={{ fontSize: 14, color: '#000000' }}>
                                (2011-2013)
                            </Text>
                        </View>
                    </View>
                    <View style={{ ...styles.line }}></View>

                    <Text style={{ ...styles.title, marginTop: 10 }}>Website</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icons name="globe" size={15} color='#05B1A1' />
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <Text style={{ fontSize: 16, color: '#000000' }}>
                                www.gdsagdsagdsa.com
                            </Text>
                        </View>
                    </View>
                    <View style={{ ...styles.line }}></View>


                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 1,
        borderWidth: 0.5,
        borderColor: '#797979',
        marginTop: 10
    },
    title: {
        fontSize: 16,
        color: '#05B1A1',
        fontWeight: '800'
    }
})

export default Users;