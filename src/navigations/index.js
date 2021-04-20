import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

import AuthNavigator from './auth-navigator';
import DrawerNavigator from './drawer-navigator';

import {GlobalContext} from '../context/provider';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [isAuthenticated, setAuthenticated] = useState(isLoggedIn);
  const [isAuthLoaded, setAuthLoaded] = useState(false);

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
      console.log('🚀 ~ file: index.js ~ line 34 ~ getUser ~ error', error);
      setAuthLoaded(true);
    }
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  return (
    <>
      {!isAuthLoaded && <ActivityIndicator />}
      {isAuthLoaded && (
        <NavigationContainer>
          {isLoggedIn || isAuthenticated ? (
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
