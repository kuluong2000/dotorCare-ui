import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserData,
  authenticationSuccess,
  setPatientData,
  bookingSuccess,
  getAllDoctorSuccess,
  getAllDoctorOfDepartmentSuccess,
} from '../../redux/actions';

function Authentication() {
  const authentication = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const dataUserLocal = JSON.parse(localStorage.getItem('data-user'));
    const tokenLocal = JSON.parse(localStorage.getItem('token'));
    const patient = JSON.parse(localStorage.getItem('patient'));
    const booking = JSON.parse(localStorage.getItem('booking'));
    const doctor = JSON.parse(localStorage.getItem('doctor'));
    const doctorOfDepartment = JSON.parse(
      localStorage.getItem('doctorOfDepartment')
    );
    if (!authentication?.token && dataUserLocal && tokenLocal) {
      Promise.all([
        dispatch(authenticationSuccess(tokenLocal)),
        dispatch(setUserData(dataUserLocal)),
        dispatch(setPatientData(patient)),
        dispatch(bookingSuccess(booking)),
        dispatch(getAllDoctorSuccess(doctor)),
        // dispatch(getAllDoctorOfDepartmentSuccess(doctorOfDepartment)),
      ]);
    }
  }, [dispatch, authentication]);
  return null;
}

export default Authentication;
