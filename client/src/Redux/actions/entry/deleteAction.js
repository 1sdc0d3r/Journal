import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import address from "../../../config/address";

export const ENTRY_DELETE_START = "ENTRY_DELETE_START";
export const ENTRY_DELETE_SUCCESS = "ENTRY_DELETE_SUCCESS";
export const ENTRY_DELETE_FAIL = "ENTRY_DELETE_FAIL";

export const deleteAction = (id, history) => (dispatch) => {
  dispatch({ type: ENTRY_DELETE_START });
  axiosWithAuth()
    .delete(`${address.LOCALHOST}/api/entry/${id}`)
    .then((res) => {
      dispatch({ type: ENTRY_DELETE_SUCCESS, payload: res.data });
      history.push("/temp");
      history.goBack();
    })
    .catch((err) => dispatch({ type: ENTRY_DELETE_FAIL, payload: err }));
};
