/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import postRegister, {
  clearAuthState,
} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/provider';
import {LOGIN} from '../../constants/route-names';

import RegisterComponent from '../../components/register';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {authDispatch, authState} = useContext(GlobalContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (authState.data) {
      navigation.navigate(LOGIN);
    }
  }, [authState.data]);

  useFocusEffect(
    useCallback(() => {
      if (authState.data || authState.error) {
        clearAuthState()(authDispatch);
      }
    }, [authState.data, authState.error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value) {
      if (name === 'password' && value.length < 6) {
        return setErrors(prev => ({
          ...prev,
          [name]: 'This field needs min 6 characters',
        }));
      }

      setErrors(prev => ({...prev, [name]: ''}));
    } else {
      setErrors(prev => ({...prev, [name]: 'Required'}));
    }
  };

  const onSubmit = () => {
    // sort vaildation if key already set in initial state
    // Object.keys(form).map(item => {
    //   if (!form?.[item]) {
    //     setErrors(prev => ({...prev, item: 'Required'}));
    //   }
    // });

    if (!form?.username) {
      setErrors(prev => ({...prev, username: 'Required'}));
    }
    if (!form?.firstName) {
      setErrors(prev => ({...prev, firstName: 'Required'}));
    }
    if (!form?.lastName) {
      setErrors(prev => ({...prev, lastName: 'Required'}));
    }
    if (!form?.email) {
      setErrors(prev => ({...prev, email: 'Required'}));
    }
    if (!form?.password) {
      setErrors(prev => ({...prev, password: 'Required'}));
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      postRegister(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      form={form}
      state={authState}
      onChange={onChange}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
