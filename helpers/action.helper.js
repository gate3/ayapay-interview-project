import { ActionType } from 'redux-promise-middleware';

export const tranformActionType = action => {
  const PENDING = `${action}_${ActionType.Pending}`;
  const FULFILLED = `${action}_${ActionType.Fulfilled}`;
  const REJECTED = `${action}_${ActionType.Rejected}`;
  return {
    PENDING,
    FULFILLED,
    REJECTED
  };
};
