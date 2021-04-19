import React, {useEffect, useState} from 'react';
import axiosInstance from '../../helpers/axios-interceptor';

import RegisterComponent from '../../components/register';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axiosInstance
      .get('/contacts')
      .catch(err => console.log('error', err.response));
  }, []);

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
  };

  return (
    <RegisterComponent
      form={form}
      onChange={onChange}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
