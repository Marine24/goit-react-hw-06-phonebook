import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  PhoneBook: contactReducer,
});

export default rootReducer;
