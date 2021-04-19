import React, {useContext, useState} from 'react';

import postLogin from '../../context/actions/auth/login';
import {GlobalContext} from '../../context/provider';
import LoginComponent from '../../components/login';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {authDispatch, authState} = useContext(GlobalContext);

  const onSubmit = () => {
    if (!form?.username) {
      setErrors(prev => ({...prev, username: 'Required'}));
    }
    if (!form?.password) {
      setErrors(prev => ({...prev, password: 'Required'}));
    }

    if (form.username && form.password) {
      postLogin(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value) {
      setErrors(prev => ({...prev, [name]: ''}));
    } else {
      setErrors(prev => ({...prev, [name]: 'Required'}));
    }
  };

  return (
    <LoginComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      state={authState}
    />
  );
};

export default Login;
