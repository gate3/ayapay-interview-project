import typeToReducer from 'type-to-reducer';

import { LOGIN } from '../shared/constants';

const initialState = {
  isLoading: false,
  error: false,
  data: null,
  loggedIn: false
};

const loginReducer = typeToReducer(
  {
    [LOGIN]: {
      PENDING: () => ({
        ...initialState,
        isLoading: true
      }),
      REJECTED: (state, action) => ({
        ...initialState,
        error: true
      }),
      FULFILLED: (state, action) => ({
        ...initialState,
        data: action.payload,
        loggedIn: true,
        account_confirmed: action.payload.account_confirmed
      })
    }
  },
  initialState
);

export default loginReducer;
