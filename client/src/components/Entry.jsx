import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { submitAction } from "../actions/entry/submitAction";

function EntryForm(props) {
  const { isSubmitting, error, user, submitAction } = props;

  const [entry, setEntry] = useState({
    medication: null,
    dose: null,
    description: null
  });

  const onChangeHandler = evt => {
    setEntry({
      ...entry,
      [evt.target.name]: evt.target.value
    });
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    submitAction(entry).then(res => console.log(res));
    props.history.push("/journal");
  };

  return (
    <>
      <NavLink to="/dashboard">Dashboard</NavLink>
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
            name="description"
            value={entry.description}
            onChange={onChangeHandler}
            placeholder="description"
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
    user: state.userReducer.user,
    error: state.entryReducer.error,
    isSubmitting: state.entryReducer.isSubmitting
  };
};

export default connect(mapStateToProps, { submitAction })(EntryForm);
