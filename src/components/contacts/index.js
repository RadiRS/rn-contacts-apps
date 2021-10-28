import React from 'react';
import {Text, View, FlatList} from 'react-native';

import {Button, Modal} from '../common';
import Message from '../message';

import styles from './styles';

const Contacts = ({modalVisible, setModalVisible}) => {
  const renderEmpty = () => (
    <View>
      <Message info message="No contacts to show" />
    </View>
  );

  return (
    <View style={styles.container}>
      {
        //<View>
        //<FlatList data={[]} ListEmptyComponent={renderEmpty} />
        //</View>
      }
      <Modal
        title="My Profile"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalBody={
          <View>
            <Text>Body</Text>
          </View>
        }
        //modalFooter={<></>}
      />
      <Button label="Show Modal" onPress={() => setModalVisible(true)} />
    </View>
  );
};

export default Contacts;
