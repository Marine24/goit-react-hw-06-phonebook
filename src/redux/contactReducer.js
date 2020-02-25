import { combineReducers } from 'redux';
import types from './types';

const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [payload.contact, ...state];

    case types.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};
const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CONTACT:
      return payload.value;
    default:
      return state;
  }
};
const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default reducer;
