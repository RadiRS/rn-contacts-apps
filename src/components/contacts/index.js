import React from 'react';
import {Text, View} from 'react-native';

import {Button, Container, Modal} from '../common';

import styles from './styles';

const Contacts = ({modalVisible, setModalVisible}) => {
  return (
    <Container style={styles.container}>
      <Text>Contacts</Text>
      <Button label="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal
        title="My Profile"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalBody={
          <View>
            <Text>Body</Text>
          </View>
        }
      />
    </Container>
  );
};

export default Contacts;
