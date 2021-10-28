import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

import {Icon} from '../../components/common';
import ContactsComponent from '../../components/contacts';

import styles from './styles';

const ContactsScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.touchLeftHeader} onPress={toggleDrawer}>
          <Icon type="material" name="menu" size={20} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <ContactsComponent
      modalVisible={isModalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default ContactsScreen;
