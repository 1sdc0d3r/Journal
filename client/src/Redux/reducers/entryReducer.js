import {
  ENTRY_SUBMIT_START,
  ENTRY_SUBMIT_SUCCESS,
  ENTRY_SUBMIT_FAIL
} from "../actions/entry/submitAction";
import {
  ENTRY_MODIFY_START,
  ENTRY_MODIFY_SUCCESS,
  ENTRY_MODIFY_FAIL
} from "../actions/entry/modifyAction";
import {
  ENTRY_DELETE_START,
  ENTRY_DELETE_SUCCESS,
  ENTRY_DELETE_FAIL
} from "../actions/entry/deleteAction";
import {
  ENTRY_ID_GET_START,
  ENTRY_ID_GET_SUCCESS,
  ENTRY_ID_GET_FAIL
} from "../actions/entry/getIdAction";

const initialState = {
  entries: [],
  edit: {},
  isFetching: false,
  isModifying: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ENTRY_SUBMIT_START:
      return { ...state, isFetching: true, error: null };
    case ENTRY_SUBMIT_SUCCESS:
      return { ...state, isFetching: false, error: null };
    case ENTRY_SUBMIT_FAIL:
      return { ...state, isFetching: false, error: action.payload };

    case ENTRY_MODIFY_START:
      return { ...state, isModifying: true, error: null };
    case ENTRY_MODIFY_SUCCESS:
      return {
        ...state,
        edit: {},
        isModifying: false,
        error: null
      };
    case ENTRY_MODIFY_FAIL:
      return { ...state, isModifying: false, error: action.payload };

    case ENTRY_DELETE_START:
      return { ...state, isFetching: true, error: null };
    case ENTRY_DELETE_SUCCESS:
      return { ...state, isFetching: false, error: null };
    case ENTRY_DELETE_FAIL:
      return { ...state, isFetching: false, error: action.payload };

    case ENTRY_ID_GET_START:
      return { ...state, isFetching: true, error: null };
    case ENTRY_ID_GET_SUCCESS:
      return {
        ...state,
        edit: action.payload,
        isFetching: false,
        isModifying: true,
        error: null
      };
    case ENTRY_ID_GET_FAIL:
      return { ...state, isFetching: false, error: action.payload };

    default:
      return state;
  }
};
