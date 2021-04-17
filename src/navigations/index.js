import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './auth-navigator';
import DrawerNavigator from './drawer-navigator';

const AppNavContainer = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

// Screens -> Home -> Drawer
// SCreens -> Auth -> Stack

export default AppNavContainer;
