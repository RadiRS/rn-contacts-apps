import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../../constants/action-types';

export default () => async dispatch => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');

    dispatch({type: LOGOUT_USER});
  } catch (error) {
    console.log('🚀 ~ file: logout.js ~ line 15 ~ error', error);
  }
};
