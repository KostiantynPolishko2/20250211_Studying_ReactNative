import 'react-native-gesture-handler';
import React, { FC } from "react";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";

// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainPage:FC = () => {
    return (
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Products' component={Products}/>
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
        // </NavigationContainer>
    );
};

export default MainPage;