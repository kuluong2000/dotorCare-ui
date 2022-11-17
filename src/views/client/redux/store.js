import { combineReducers } from 'redux';
import { modal } from './reducer/modal';
import { authentication } from './reducer/authentication';
import { booking } from './reducer/booking';

export default combineReducers({
  modal: modal,
  authentication: authentication,
  booking: booking,
});
