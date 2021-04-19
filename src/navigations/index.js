import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

import AuthNavigator from './auth-navigator';
import DrawerNavigator from './drawer-navigator';

import {GlobalContext} from '../context/provider';

const AppNavContainer = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isAuthLoaded, setAuthLoaded] = useState(false);
  const {authState} = useContext(GlobalContext);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setAuthLoaded(true);
        setAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setAuthenticated(false);
      }
    } catch (error) {
      setAuthLoaded(true);
      console.warn(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {!isAuthLoaded && <ActivityIndicator />}
      {isAuthLoaded && (
        <NavigationContainer>
          {authState.isLoggedIn || isAuthenticated ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      )}
    </>
  );
};

export default AppNavContainer;
