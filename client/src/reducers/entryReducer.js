ENTRY_SUBMIT_START, ENTRY_SUBMIT_SUCCESS, ENTRY_SUBMIT_FAIL;

const initialState = {
  isSubmitting: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case typeName:
      return { ...state };

    default:
      return state;
  }
};
