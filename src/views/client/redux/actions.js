import * as actionType from "./actionTypes";
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
