import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CONTACTS_LIST,
  CONTACT_DETAIL,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/route-names';
import {Contacts, ContactDetail, CreateContact, Settings} from '../screens';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACTS_LIST}>
      <HomeStack.Screen name={CONTACTS_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
