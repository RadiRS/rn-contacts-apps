import React, {createContext, useReducer} from 'react';

import authReducer from './reducers/auth-reducers';
import authInitState from './initial-states/auth-state';
import contactsReducer from './reducers/contacts-reducers';
import contactsInitState from './initial-states/contacts-state';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitState,
  );

  const provValue = {
    authState,
    authDispatch,
    contactsState,
    contactsDispatch,
  };

  return (
    <GlobalContext.Provider value={provValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
