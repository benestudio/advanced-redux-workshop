import { combineReducers } from 'redux';
import messages from './messages';
import rooms from './rooms';

export default combineReducers({
  rooms,
  messages,
});
