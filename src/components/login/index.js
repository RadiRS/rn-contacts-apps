import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {REGISTER} from '../../constants/route-names';
import {Button, Container, Input} from '../common';
import Message from '../message';

import styles from './styles';

const Login = ({onSubmit, onChange, errors, state}) => {
  const navigation = useNavigation();
  const {loading, error} = state;

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
          {error && <Message danger onDismiss message={error?.detail} />}
          <Input
            label="Username"
            placeholder="Enter Username"
            error={errors?.username}
            onChangeText={value => onChange({name: 'username', value})}
          />
          <Input
            secure
            label="Password"
            placeholder="Enter Password"
            iconPosition="right"
            error={errors?.password}
            onChangeText={value => onChange({name: 'password', value})}
          />
          <Button
            label="Submit"
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
          />
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
