import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {Container, Icon} from '../../components/common';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{padding: 10}} onPress={toggleDrawer}>
          <Icon type="material" name="menu" size={20} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <Container>
      <Text>Contacts</Text>
    </Container>
  );
};

export default Contacts;
