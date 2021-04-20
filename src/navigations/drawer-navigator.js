import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigator from './home-navigator';
import {HOME_NAVIGATOR} from '../constants/route-names';
import SlideMenu from '../components/slide-menu';
import {GlobalContext} from '../context/provider';

const getDrawerContent = (navigation, authDispatch) => (
  <SlideMenu navigation={navigation} authDispatch={authDispatch} />
);

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = useContext(GlobalContext);

  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
