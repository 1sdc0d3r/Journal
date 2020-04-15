// * newField-feature

import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import address from "../../../config/address";

export const ENTRY_NEWFIELD_START = "ENTRY_NEWFIELD_START";
export const ENTRY_NEWFIELD_SUCCESS = "ENTRY_NEWFIELD_SUCCESS";
export const ENTRY_NEWFIELD_FAIL = "ENTRY_NEWFIELD_FAIL";

export const newFieldAction = (field, history) => (dispatch) => {
  console.log("newFieldAction");
  //   dispatch({ type: ENTRY_NEWFIELD_START });
  // axiosWithAuth()
  // .post(`${address.LOCALHOST}/api/entry/field`, { field: field })
  // .then(res => {
  // console.log(res.data);
  //   dispatch({ type: ENTRY_NEWFIELD_SUCCESS, payload: res.data });
  //   history.push("/entry");
  // })
  // .catch(err => dispatch({ type: ENTRY_NEWFIELD_FAIL, payload: err }));
};
