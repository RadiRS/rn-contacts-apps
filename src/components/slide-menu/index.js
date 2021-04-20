import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SETTINGS} from '../../constants/route-names';

import {Container} from '../common';

import styles from './styles';

const SlideMenu = ({navigation}) => {
  const uri =
    'https://image.freepik.com/free-psd/whatsapp-icon-isolated-3d-rendering_75891-1042.jpg';

  const handleLogout = () => {
    navigation.toggleDrawer();

    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Text>*</Text>,
      name: 'Settings',
      onPress: () => navigation.navigate(SETTINGS),
    },
    {
      icon: <Text>*</Text>,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image source={{uri}} style={styles.logoImage} />
        <View style={styles.itemContainer}>
          {menuItems.map(item => (
            <TouchableOpacity
              key={item.name}
              style={styles.item}
              onPress={item.onPress}>
              {item.icon}
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SlideMenu;
