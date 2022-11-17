import * as actionTypes from './../actionTypes';

const initialState = {
  token: '',
  dataUser: [],
  patient: '',
  loading: false,
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTHENTICATION_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    case actionTypes.AUTHENTICATION_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case actionTypes.SET_USER: {
      return {
        ...state,
        dataUser: action.payload,
      };
    }
    case actionTypes.SET_PATIENT: {
      return {
        ...state,
        patient: action.payload,
      };
    }
    default:
      return state;
  }
}
