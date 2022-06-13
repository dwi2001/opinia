import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../scene/Chat';


const stack = createStackNavigator();

const ChatNavigator = (props) => {

    return (
        <stack.Navigator>
            <stack.Screen name='Chat' component={Chat} options={{ headerShown: true, }} />
        </stack.Navigator>

    )
}

export default ChatNavigator;