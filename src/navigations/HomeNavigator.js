import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routenName';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';

const HomeNavigator = () => {

    const HomeStact = createStackNavigator();
    return (
        <HomeStact.Navigator initialRouteName={CONTACT_LIST} >
          <HomeStact.Screen name={CONTACT_LIST} component={Contacts} />
          <HomeStact.Screen name={CONTACT_DETAIL} component={ContactDetail} />
          <HomeStact.Screen name={CREATE_CONTACT} component={CreateContact} />
          <HomeStact.Screen name={SETTINGS} component={Settings} />
        </HomeStact.Navigator>
      );
};

export default HomeNavigator;