import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Users from '../scene/Users';



const stack = createStackNavigator();

const UsersNavigator = (props) => {

    return (
        <stack.Navigator>
            <stack.Screen name='Users' component={Users} options={{ headerShown: false, }} />
        </stack.Navigator>

    )
}

export default UsersNavigator;