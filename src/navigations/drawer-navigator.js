import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigator from './home-navigator';
import {HOME_NAVIGATOR} from '../constants/route-names';
import SlideMenu from '../components/slide-menu';

const getDrawerContent = navigation => <SlideMenu navigation={navigation} />;

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) => getDrawerContent(navigation)}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
