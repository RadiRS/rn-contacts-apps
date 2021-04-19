import axios from '../../../helpers/axios-interceptor';
import {
  CLEAR_AUTH_STATE,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/action-types';

export default form => async dispatch => {
  const params = {
    email: form.email,
    password: form.password,
    username: form.username,
    first_name: form.firstName,
    last_name: form.lastName,
  };

  dispatch({type: REGISTER_LOADING});

  try {
    const res = await axios.post('/auth/register', params);

    dispatch({type: REGISTER_SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({
      type: REGISTER_FAILED,
      payload: error.response
        ? error.response.data
        : {error: 'Something going wrong'},
    });
  }
};

export const clearAuthState = () => dispatch =>
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
