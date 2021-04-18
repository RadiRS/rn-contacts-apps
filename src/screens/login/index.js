import React from 'react';
import {Text} from 'react-native';

import {Button, Container, Input} from '../../components/common';

const Login = () => {
  return (
    <Container>
      <Text>Login</Text>
      <Input label="Username" />
      <Input label="Password" icon={<Text>Hide</Text>} iconPosition="right" />
      <Button label="Submit" loading disabled />
      <Button label="Submit" loading />
      <Button label="Submit" secondary />
      <Button label="Submit" danger />
    </Container>
  );
};

export default Login;
