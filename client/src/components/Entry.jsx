import React, { useState } from "react";
import { connect } from "react-redux";

function EntryForm(props) {
  const { isSubmitting, error } = props;

  const [entry, setEntry] = useState({
    username: "",
    password: ""
  });

  const onChangeHandler = evt => {
    setEntry({
      ...entry,
      [evt.target.name]: evt.target.value
    });
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    // loginAction(entry);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        {!error ? null : <h3>{error}</h3>}
        <label>
          medication:{" "}
          <input
            type="text"
            name="medication"
            value={entry.medication}
            onChange={onChangeHandler}
            placeholder="medication"
            required
          />
        </label>
        <label>
          dose:{" "}
          <input
            type="text"
            name="dose"
            value={entry.dose}
            onChange={onChangeHandler}
            placeholder="dose"
            required
          />
        </label>{" "}
        <label>
          Entry:{" "}
          <input
            type="text"
            name="entry"
            value={entry.entry}
            onChange={onChangeHandler}
            placeholder="entry"
            required
          />
        </label>
        <button type="submit">
          {!isSubmitting ? "Submit" : "Submitting..."}
        </button>
      </form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    error: state.userReducer.error,
    isSubmitting: state.entryReducer.isSubmitting
  };
};

export default connect(mapStateToProps, {})(EntryForm);
