import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../../helpers/axios-interceptor';
import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/action-types';

export default form => async dispatch => {
  const params = {
    password: form.password,
    username: form.username,
  };

  dispatch({type: LOGIN_LOADING});

  try {
    const res = await axios.post('/auth/login', params);
    await AsyncStorage.setItem('token', res.data.token);
    await AsyncStorage.setItem('user', JSON.stringify(res.data.user));

    dispatch({type: LOGIN_SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response
        ? error.response.data
        : {error: 'Something going wrong'},
    });
  }
};
