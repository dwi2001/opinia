import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



const CardProfile = () => {
    const navigation = useNavigation();


    const data =
        [
            { name: 'star-outline' },
            { name: 'star-outline' },
            { name: 'star-outline' },
            { name: 'star-outline' },
            { name: 'star-outline' },
        ]


    return (
        <View style={{}}>

            <View style={{ ...styles.container, ...styles.shadow }}>
                <Image
                    source={require('../asset/231.png')}
                    style={{ ...styles.image }}
                    resizeMode='contain' />
                <TouchableOpacity style={{ marginTop: 17, alignItems: 'center', }} onPress={() => navigation.navigate('Users')}>
                    <Text style={styles.title}>Skylar Vaccaro</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(item) => {
                            let items = item.item
                            return (
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name={items.name} color='#DD7F29' size={15} />
                                </View>
                            )
                        }}
                        horizontal={true}
                        style={{ marginRight: 25 }}
                    />
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <Text style={{}}>
                            Penulis | Politisi
                        </Text>
                        <Text style={{ width: 200, textAlign: 'center', fontSize: 16, fontWeight: '500', color: '#000000' }}>
                            "Hidup itu sederhana, kita yang membuatnya sulit."
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={{ ...styles.bottomContainer }}>
                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', }}>

                        <TouchableOpacity style={{ ...styles.btnBottom, borderRightColor: '#fff' }}>
                            <Text style={{ ...styles.text }}>
                                Postingan
                            </Text>
                            <Text style={{ ...styles.number }}>
                                26
                            </Text>
                        </TouchableOpacity>
                        <View style={{ borderWidth: 0.5, height: 30, alignSelf: 'center', borderColor: '#fff' }}></View>
                        <TouchableOpacity style={{ ...styles.btnBottom }} onPress={() => navigation.navigate('Following', { dataName })}>
                            <Text style={{ ...styles.text }}>
                                Mengikuti
                            </Text>
                            <Text style={{ ...styles.number }}>
                                30
                            </Text>
                        </TouchableOpacity>
                        <View style={{ borderWidth: 0.5, height: 30, alignSelf: 'center', borderColor: '#fff' }}></View>

                        <TouchableOpacity style={{ ...styles.btnBottom }} onPress={() => navigation.navigate('Follower', { dataName })}>
                            <Text style={{ ...styles.text }}>
                                Pengikut
                            </Text>
                            <Text style={{ ...styles.number }}>
                                29
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    image: {
        width: 87,
        height: 87,
        borderRadius: 50,
        position: 'absolute',
        top: -40,
        left: 12
    },
    container: {
        backgroundColor: '#ffffff',
        height: 196,
        width: 347,
        flex: 1,
        borderRadius: 12
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        backgroundColor: '#fff'
    },

    bottomContainer: {
        flex: 1,
        width: '100%',
        height: 30,
        marginTop: 17,
        backgroundColor: '#05B1A1',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnBottom: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400'
    },
    number: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    }
})


const dataName = [

    {
        nama: 'Julia Mareta',
        image: require('../asset/231.png')
    },
    {
        nama: 'Rapik Kurnia',
        image: require('../asset/1.png')
    },
    {
        nama: 'Lola Lita',
        image: require('../asset/2.png')
    },
    {
        nama: 'Lisa Kirana',
        image: require('../asset/3.png')
    },
    {
        nama: 'Charlie Calzoni',
        image: require('../asset/4.png')
    },
    {
        nama: 'Resti',
        image: require('../asset/5.png')
    },
    {
        nama: 'Firman Maul',
        image: require('../asset/6.png')
    },
    {
        nama: 'Rajib GB',
        image: require('../asset/7.png')
    },
    {
        nama: 'Eko Loso',
        image: require('../asset/8.png')
    },
    {
        nama: 'JResi Melisa',
        image: require('../asset/9.png')
    },
    {
        nama: 'Karina Kuy',
        image: require('../asset/10.png')
    },
    {
        nama: 'Angel',
        image: require('../asset/11.png')
    },
    {
        nama: 'Carla Dias',
        image: require('../asset/12.png')
    },
    {
        nama: 'Terry Gouse',
        image: require('../asset/13.png')
    },

]

export default CardProfile;