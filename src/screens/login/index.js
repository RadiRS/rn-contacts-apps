/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

import postLogin from '../../context/actions/auth/login';
import {GlobalContext} from '../../context/provider';
import LoginComponent from '../../components/login';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {authDispatch, authState} = useContext(GlobalContext);
  console.log('🚀 ~ file: index.js ~ line 14 ~ Login ~ authState', authState);
  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({
        ...form,
        username: params.data.username,
      });
    }
  }, [params]);

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

    setJustSignedUp(false);
  };

  return (
    <LoginComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      state={authState}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
