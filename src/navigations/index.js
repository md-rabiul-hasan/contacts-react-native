import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
    const isLoggedin = false;
    return (
        <NavigationContainer>
            {isLoggedin ?  <DrawerNavigator /> : <AuthNavigator />}           
        </NavigationContainer>
    );
};

export default AppNavContainer;