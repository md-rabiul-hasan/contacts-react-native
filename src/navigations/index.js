import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/provider';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
    const isLoggedin = false;
    const state = useContext(GlobalContext);
    console.log(state);
    return (
        <NavigationContainer>
            {isLoggedin ?  <DrawerNavigator /> : <AuthNavigator />}           
        </NavigationContainer>
    );
};

export default AppNavContainer;