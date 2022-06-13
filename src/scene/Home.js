import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome';
import CardProfile from "../components/CardProfile";
import Point from "../components/Point";
import ButtonMenu from "../components/ButtonMenu";


const Home = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('../asset/231.png')}
                    resizeMode='stretch'
                    style={{ width: '100%' }}
                />
                <TouchableOpacity style={{ ...styles.camera }} onPress={() => toggleModal()}>
                    <Icon name="camera" style={{ alignSelf: 'center' }} color='#FFFFFF' size={15} />
                </TouchableOpacity>


                <View style={{ top: 120, padding: 20, position: 'absolute', }}>
                    <CardProfile />
                </View>
            </View>
            <View style={{ marginTop: 40, flex: 1, }}>
                <Point />
                <View style={{ marginTop: 15, flexDirection: 'column', paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 14 }}>
                        Lengkapi Profile Anda 2/3
                    </Text>
                    <View style={{ borderWidth: 1, height: 3, borderColor: '#05B1A1' }}>
                        <View style={{ borderWidth: 1, borderColor: '#EA6C00', width: 234 }}>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 15 }}>
                    <ButtonMenu />
                </View>

                <View style={{ flexDirection: 'column', padding: 20, marginTop: 5 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image source={require('../asset/231.png')} style={{ ...styles.Image1 }} />
                        <View style={{ flexDirection: 'column', marginLeft: 8 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: '#000000' }}>
                                Julia Mareta
                            </Text>
                            <Text style={{ fontSize: 12, }}>
                                19 Menit Lalu | idea
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 18 }}>
                            Contrary to popular belief, Lorem Ipsum is not
                        </Text>
                    </View>
                </View>
                <View style={{ ...styles.image2 }}>
                    <Image source={require('../asset/bulu.png')} />
                </View>
            </View>

            <Modal isVisible={isModalVisible}

            >
                <View style={{ ...styles.mainModal }}>
                    <View style={{ ...styles.containerModal }} >
                        <View style={{ ...styles.modal }}>
                            <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Icon name="camera" size={25} color={'#fff'} />
                                <Text style={{ color: '#fff', marginTop: 5 }}>Kamera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Icon name="image" size={25} color={'#fff'} />
                                <Text style={{ color: '#fff', marginTop: 5 }}>Galeri</Text>
                            </TouchableOpacity>
                        </View>
                        <View></View>
                        <TouchableOpacity style={{ ...styles.bannerModal }}>
                            <Text style={{ fontSize: 15, color: '#fff', fontWeight: '700' }} >
                                HAPUS GAMBAR BANNER
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: 39, justifyContent: 'center' }} onPress={() => toggleModal()}>
                            <Text style={{ ...styles.textBatal }}>BATAL</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal >

        </View >
    )
}

const styles = StyleSheet.create({
    camera: {
        width: 36,
        height: 36,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#05B1A1',
        position: 'absolute',
        right: 26,
        top: 15
    },
    Image1: {
        width: 39,
        height: 39,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#05B1A1'
    },
    image2: {
        width: 50,
        height: 50,
        position: 'absolute',
        borderRadius: 36,
        right: 20,
        bottom: 40
    },
    modal: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#05B1A1',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    containerModal: {
        width: 250,
        height: 180,
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'column'
    },
    bannerModal: {
        height: 60,
        backgroundColor: '#05B1A1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBatal: {
        color: '#05B1A1',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '700'
    }
})

export default Home;