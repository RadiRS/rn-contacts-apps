import {
  CLEAR_AUTH_STATE,
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/action-types';

const auth = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    default:
      return state;
  }
};

export default auth;
