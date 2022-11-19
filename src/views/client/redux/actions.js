import axios from 'axios';
import BASE_URL from '../utils/configUrl';
import * as actionType from './actionTypes';
export const openModal = (data) => {
  return {
    type: actionType.OPEN_MODAL,
    payload: { data },
  };
};
export const hideModal = () => {
  return {
    type: actionType.CLOSE_MODAL,
  };
};

export const authenticationStart = () => {
  return {
    type: actionType.AUTHENTICATION_START,
  };
};
export const authenticationSuccess = (data) => {
  return {
    type: actionType.AUTHENTICATION_SUCCESS,
    payload: data,
  };
};

export const authenticationFail = () => {
  return {
    type: actionType.AUTHENTICATION_FAIL,
  };
};

export const setUserData = (data) => {
  return {
    type: actionType.SET_USER,
    payload: data,
  };
};
export const setPatientData = (data) => {
  return {
    type: actionType.SET_PATIENT,
    payload: data,
  };
};

export const updateUserStart = () => {
  return {
    type: actionType.UPDATE_USER_START,
  };
};
export const updateUserSuccess = (data) => {
  return {
    type: actionType.UPDATE_USER_SUCCESS,
    payload: data,
  };
};
export const updateUserFail = () => {
  return {
    type: actionType.UPDATE_USER_FAIL,
  };
};

export const login = (data) => {
  return (dispatch) => {
    dispatch(authenticationStart());
    axios
      .post(`${BASE_URL}/authen/login`, {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('token', JSON.stringify(res.data.token));
          localStorage.setItem('patient', JSON.stringify(res.data.data[0]._id));
          localStorage.setItem(
            'data-user',
            JSON.stringify(res.data.data[0].account.people)
          );
          dispatch(authenticationSuccess(res.data));
          dispatch(setPatientData(res.data.data[0]._id));
          return dispatch(setUserData(res.data.data[0].account.people));
        } else {
          return dispatch(authenticationFail());
        }
      })
      .catch((err) => dispatch(authenticationFail()));
  };
};
export const logout = () => {
  return (dispatch) => {
    dispatch(authenticationStart());
    localStorage.removeItem('data-user');
    localStorage.removeItem('token');
    dispatch(authenticationSuccess(''));
    return dispatch(setUserData(''));
  };
};

export const UpdateMe = (id, data) => {
  return (dispatch) => {
    dispatch(updateUserStart());
    axios
      .patch(`${BASE_URL}/user/me/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('data-user', JSON.stringify(res.data.data));
          return dispatch(setUserData(res.data.data));
        } else {
          return dispatch(updateUserFail());
        }
      })
      .catch((err) => dispatch(updateUserFail()));
  };
};

//Booking
export const bookingStart = () => {
  return {
    type: actionType.BOOKING_START,
  };
};
export const bookingSuccess = (data) => {
  return {
    type: actionType.BOOKING_SUCCESS,
    payload: data,
  };
};
export const bookingFail = () => {
  return {
    type: actionType.BOOKING_FAIL,
  };
};

export const getAllBookingPatient = (id) => {
  return (dispatch) => {
    dispatch(bookingStart());
    axios
      .get(`${BASE_URL}/user/booking/${id}`)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('booking', JSON.stringify(res.data.data));
          return dispatch(bookingSuccess(res.data.data));
        } else {
          return dispatch(bookingFail());
        }
      })
      .catch((err) => dispatch(bookingFail()));
  };
};
export const userBooking = (data) => {
  return (dispatch) => {
    dispatch(bookingStart());
    axios
      .post(`${BASE_URL}/user/booking`, data)
      .then((res) => {
        console.log(res.data);
        if (res.status === 201) {
          return alert('đặt thành công');
        } else {
          return dispatch(bookingFail());
        }
      })
      .catch((err) => dispatch(bookingFail()));
  };
};
