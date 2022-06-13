import React from 'react';
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import UsersNavigator from './UsersNavigator';
import ChatNavigator from './ChatNavigator';
import SearchNavigator from './SearchNavigator';

import Icon from 'react-native-vector-icons/FontAwesome';




const Tab = createBottomTabNavigator();


const Navigasi = (props) => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomeNavigator') {
                        iconName = 'home'
                    }
                    if (route.name === 'SearchNavigator') {
                        iconName = 'search'
                    }
                    if (route.name === 'UsersNavigator') {
                        iconName = 'users'
                    }
                    else if (route.name == 'ChatNavigator') {
                        iconName = 'comments'
                    }
                    return <Icon name={iconName} size={20} color={focused ? '#05B1A1' : '#797979'} />
                },
                tabBarShowLabel: false
            })}
        >
            {/* 
        <Tab.Screen name="plus" component={WelcomeScreen} options={{
            headerShown: false, tabBarIcon: ({ }) =>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 28, // space from bottombar
                        height: 56,
                        width: 56,
                        borderRadius: 16,
                        backgroundColor: '#223151',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Icon
                        name='add'

                        color='#FFFFFF'
                        size={30}
                    />
                </View>

        }} />
        <Tab.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }} /> */}
            <Tab.Screen name="HomeNavigator" component={HomeNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="SearchNavigator" component={SearchNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="UsersNavigator" component={UsersNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="ChatNavigator" component={ChatNavigator} options={{ headerShown: false }} />


        </Tab.Navigator>


    )
}

export default Navigasi;