import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, FlatList } from 'react-native';

const Following = (props) => {
    // console.log(props.route.params);
    const data = props.route.params.dataName


    const renderItem = (item) => {
        const items = item.item
        return (
            <View style={{ paddingHorizontal: 20, paddingVertical: 5, }}>
                <View style={{ ...styles.container }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={items.image} style={{ ...styles.image }} />
                        <Text style={{ ...styles.name }}>
                            {items.nama}
                        </Text>
                    </View>
                    <TouchableOpacity style={{ ...styles.btn }}>
                        <Text style={{ fontSize: 18, fontWeight: '800', color: '#fff' }}>
                            Mengikuti
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../asset/Background.png')} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }} >
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(item) =>
                            renderItem(item)}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        borderRadius: 20,
        padding: 5,
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    image: {
        borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#05B1A1'
    },
    btn: {
        backgroundColor: '#05B1A1',
        borderRadius: 16,
        width: 106,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 17,
        color: '#000000'

    }
})

export default Following;