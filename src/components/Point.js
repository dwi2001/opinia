import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Point = () => {


    return (
        <TouchableOpacity style={{ backgroundColor: '#E4E4E4', }}>
            <View style={{ ...styles.container }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../asset/diamond.png')} />
                    <View style={{ flexDirection: 'column', marginLeft: 12 }}>
                        <Text style={{ ...styles.title }}>
                            Total Poin Anda
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#EA6C00', fontSize: 16 }}>
                                230
                            </Text>
                            <Text style={{ marginLeft: 5 }}>
                                Klaim Reward
                            </Text>
                        </View>
                    </View>
                </View>
                <Icon name='angle-right' size={40} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 21,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000000'
    }
})

export default Point;