import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {LOGIN} from '../../constants/route-names';
import {Button, Container, Input} from '../common';
import Message from '../message';

import styles from './styles';

const RegisterComponent = ({errors, onChange, onSubmit, state}) => {
  const navigation = useNavigation();
  const {error, loading} = state;
  const uri =
    'https://image.freepik.com/free-psd/whatsapp-icon-isolated-3d-rendering_75891-1042.jpg';

  const onPressLogin = () => navigation.navigate(LOGIN);

  return (
    <Container>
      <Image source={{uri}} style={styles.logoImage} />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          {error?.error(
            <Message danger onRetry={() => null} message={error?.error} />,
          )}

          <Input
            label="Username"
            placeholder="Enter Username"
            error={errors?.username || error?.username?.[0]}
            onChangeText={value => onChange({name: 'username', value})}
          />
          <Input
            label="First name"
            placeholder="Enter First name"
            error={errors?.firstName || error?.first_name?.[0]}
            onChangeText={value => onChange({name: 'firstName', value})}
          />
          <Input
            label="Last name"
            placeholder="Enter Last name"
            error={errors?.lastName || error?.last_name?.[0]}
            onChangeText={value => onChange({name: 'lastName', value})}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            error={errors?.email || error?.email?.[0]}
            onChangeText={value => onChange({name: 'email', value})}
          />
          <Input
            secure
            label="Password"
            placeholder="Enter Password"
            iconPosition="right"
            icon={<Text>Show</Text>}
            error={errors?.password || error?.password?.[0]}
            onChangeText={value => onChange({name: 'password', value})}
          />
          <Button
            label="Submit"
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
          />

          <View style={styles.registerSection}>
            <Text>Already hava account?</Text>
            <TouchableOpacity
              onPress={onPressLogin}
              style={styles.touchRegister}>
              <Text style={styles.textRegister}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
