import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../scene/Search';



const stack = createStackNavigator();

const SearchNavigator = (props) => {

    return (
        <stack.Navigator>
            <stack.Screen name='Search' component={Search} options={{ headerShown: true, title: ' Detail Movie' }} />
        </stack.Navigator>

    )
}

export default SearchNavigator;