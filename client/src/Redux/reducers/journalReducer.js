import {
  JOURNAL_GET_START,
  JOURNAL_GET_SUCCESS,
  JOURNAL_GET_FAIL
} from "../actions/entry/getJournal";

const initialState = {
  entries: [],
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JOURNAL_GET_START:
      return { ...state, isFetching: true, error: null };
    case JOURNAL_GET_SUCCESS:
      return {
        ...state,
        entries: action.payload,
        isFetching: false,
        error: null
      };
    case JOURNAL_GET_FAIL:
      return { ...state, isFetching: false, error: action.payload };

    default:
      return state;
  }
};
