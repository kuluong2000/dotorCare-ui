import { combineReducers } from 'redux';
import { modal } from './reducer/modal';
import { authentication } from './reducer/authentication';
import { booking } from './reducer/booking';
import { doctor } from './reducer/doctor';
import { department } from './reducer/department';

export default combineReducers({
  modal: modal,
  authentication: authentication,
  booking: booking,
  doctor: doctor,
  department: department,
});
