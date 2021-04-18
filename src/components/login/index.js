import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {REGISTER} from '../../constants/route-names';
import {Button, Container, Input} from '../common';

import styles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const uri =
    'https://image.freepik.com/free-psd/whatsapp-icon-isolated-3d-rendering_75891-1042.jpg';

  const onPressRegister = () => navigation.navigate(REGISTER);

  return (
    <Container>
      <Image source={{uri}} style={styles.logoImage} />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
          <Input label="Username" placeholder="Enter Username" />
          <Input
            label="Password"
            placeholder="Enter Password"
            icon={<Text>Hide</Text>}
            iconPosition="right"
            secure
          />
          <Button label="Submit" />

          <View style={styles.registerSection}>
            <Text>Need a new account?</Text>
            <TouchableOpacity
              onPress={onPressRegister}
              style={styles.touchRegister}>
              <Text style={styles.textRegister}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login;
