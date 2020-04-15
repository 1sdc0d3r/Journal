import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import address from "../../../config/address";

export const JOURNAL_GET_START = "JOURNAL_GET_START";
export const JOURNAL_GET_SUCCESS = "JOURNAL_GET_SUCCESS";
export const JOURNAL_GET_FAIL = "JOURNAL_GET_FAIL";

export const getJournalAction = (history) => (dispatch) => {
  dispatch({ type: JOURNAL_GET_START });
  axiosWithAuth()
    .get(`${address.LOCALHOST}/api/journal`)
    // , {
    //   params: {
    //     limit: limit,
    //     offset: offset
    //   }
    // })
    .then((res) => {
      dispatch({ type: JOURNAL_GET_SUCCESS, payload: res.data });
      if (history) {
        history.push("/temp");
        history.goBack();
      }
    })
    .catch((err) => dispatch({ type: JOURNAL_GET_FAIL, payload: err }));
};
