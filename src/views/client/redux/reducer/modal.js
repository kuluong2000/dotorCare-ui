import * as actionType from "./../actionTypes";
const initialState = {
  data: [],
  modal: { show: false },
  // loading: false,
};
export function modal(state = initialState, action) {
  switch (action.type) {
    case actionType.OPEN_MODAL:
      return {
        ...state,
        modal: { show: true, ...action.payload },
        data: action.payload,
      };
    case actionType.CLOSE_MODAL:
      return {
        ...state,
        modal: { show: false },
      };
    default:
      return state;
  }
}
