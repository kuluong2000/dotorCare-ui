import * as actionTypes from './../actionTypes';

const initialState = {
  dataBooking: [],
  loading: false,
};

export function booking(state = initialState, action) {
  switch (action.type) {
    case actionTypes.BOOKING_START:
      return {
        ...state,

        loading: true,
      };
    case actionTypes.BOOKING_SUCCESS:
      return {
        ...state,
        dataBooking: action.payload,
        loading: false,
      };
    case actionTypes.BOOKING_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
