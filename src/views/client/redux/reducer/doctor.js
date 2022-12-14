import * as actionTypes from './../actionTypes';

const initialState = {
  doctor: [],
  doctorOfDepartment: [],
  loading: false,
};
export function doctor(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_DOCTOR_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ALL_DOCTOR_SUCCESS:
      return {
        ...state,
        doctor: action.payload,
        loading: false,
      };
    case actionTypes.GET_ALL_DOCTOR_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_ALL_DOCTOR_OF_DEPARTMENT_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ALL_DOCTOR_OF_DEPARTMENT_SUCCESS:
      return {
        ...state,
        doctorOfDepartment: action.payload,
        loading: false,
      };
    case actionTypes.GET_ALL_DOCTOR_OF_DEPARTMENT_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
