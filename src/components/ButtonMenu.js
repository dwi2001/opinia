import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';




const ButtonMenu = () => {

    return (

        <View style={{ flexDirection: 'row', height: 68, alignItems: 'center', }}>

            <View style={{ ...styles.container }}>
                <View style={{ ...styles.btnmenu, }}>
                    <Icon name='bars' size={15} color='#05B1A1' />
                </View>
                <Text style={{ ...styles.text }}>semua</Text>
            </View>

            <View style={{ ...styles.container }}>

                <View style={{ ...styles.btnmenu }}>
                    <Icons name='bulb' size={15} color='#05B1A1' />
                </View>
                <Text style={{ ...styles.text }}>Idea</Text>
            </View>

            <View style={{ ...styles.container }}>
                <View style={{ ...styles.btnmenu }}>
                    <Icon name='book' size={15} color='#05B1A1' />
                </View>
                <Text style={{ ...styles.text }}>Artikel</Text>
            </View>

            <View style={{ ...styles.container }}>
                <View style={{ ...styles.btnmenu }}>
                    <Icon name='chart-bar' size={15} color='#05B1A1' />
                </View>
                <Text style={{ ...styles.text }}>Polling</Text>
            </View>

            <View style={{ ...styles.container }}>
                <View style={{ ...styles.btnmenu }}>
                    <Icon name='users' size={15} color='#05B1A1' />
                </View>
                <Text style={{ ...styles.text }}>Petisi</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    btnmenu: {
        flex: 1,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        // backgroundColor: '#05B1A1',
        marginHorizontal: 16,
        borderWidth: 0.5,
        borderColor: '#9B9B9B'

    },
    container: {
        flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        color: '#05B1A1',
        fontWeight: '400'
    }
})

export default ButtonMenu;