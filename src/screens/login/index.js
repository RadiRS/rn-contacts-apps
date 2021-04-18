import React from 'react';
import {Text} from 'react-native';

import {Container, Input} from '../../components/common';

const Login = () => {
  return (
    <Container>
      <Text>Login</Text>
      <Input label="Username" />
      <Input label="Password" icon={<Text>Hide</Text>} iconPosition="right" />
    </Container>
  );
};

export default Login;
