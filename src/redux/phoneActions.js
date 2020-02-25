import types from './types';

export const addContactAction = value => ({
  type: types.ADD_CONTACT,
  payload: {
    contact: value,
  },
});

export const deleteContactAction = id => ({
  type: types.DELETE_CONTACT,
  payload: {
    id,
  },
});
export const filterContactAction = value => ({
  type: types.FILTER_CONTACT,
  payload: {
    value,
  },
});
