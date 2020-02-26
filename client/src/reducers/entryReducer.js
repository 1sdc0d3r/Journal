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

const initialState = {
  isSubmitting: false,
  isModifying: false,
  isDeleting: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ENTRY_SUBMIT_START:
      return { ...state, isSubmitting: true, error: null };
    case ENTRY_SUBMIT_SUCCESS:
      return { ...state, isSubmitting: false, error: null };
    case ENTRY_SUBMIT_FAIL:
      return { ...state, isSubmitting: false, error: action.payload };

    case ENTRY_MODIFY_START:
      return { ...state, isSubmitting: true, error: null };
    case ENTRY_MODIFY_SUCCESS:
      return { ...state, isSubmitting: false, error: null };
    case ENTRY_MODIFY_FAIL:
      return { ...state, isSubmitting: false, error: action.payload };

    case ENTRY_DELETE_START:
      return { ...state, isDeleting: true, error: null };
    case ENTRY_DELETE_SUCCESS:
      return { ...state, isDeleting: false, error: null };
    case ENTRY_DELETE_FAIL:
      return { ...state, isDeleting: false, error: action.payload };

    default:
      return state;
  }
};
