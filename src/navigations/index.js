import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './auth-navigator';
import DrawerNavigator from './drawer-navigator';

import {GlobalContext} from '../context/provider';

const AppNavContainer = () => {
  const {authState} = useContext(GlobalContext);

  const isLoggedIn = authState.isLoggedIn;

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
