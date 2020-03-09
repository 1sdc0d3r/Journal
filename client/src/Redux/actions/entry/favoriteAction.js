import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import address from "../../../config/address";

export const ENTRY_FAVORITE_START = "ENTRY_FAVORITE_START";
export const ENTRY_FAVORITE_SUCCESS = "ENTRY_FAVORITE_SUCCESS";
export const ENTRY_FAVORITE_FAIL = "ENTRY_FAVORITE_FAIL";

export const favoriteAction = (id, history) => dispatch => {
  dispatch({ type: ENTRY_FAVORITE_START });
  axiosWithAuth()
    .get(`${address.LOCALHOST}/api/entry/favorite/${id}`)
    .then(res => dispatch({ type: ENTRY_FAVORITE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ENTRY_FAVORITE_FAIL, payload: err }));
};
