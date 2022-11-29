import * as actionTypes from './../actionTypes';

const initialState = {
  department: [],
  loading: false,
};
export function department(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_DEPARTMENT_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ALL_DEPARTMENT_SUCCESS:
      return {
        ...state,
        department: action.payload,
        loading: false,
      };
    case actionTypes.GET_ALL_DEPARTMENT_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
