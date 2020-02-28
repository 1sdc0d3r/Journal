import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { submitAction } from "../actions/entry/submitAction";
import { getEntriesAction } from "../actions/entry/getAction";

function EntryForm(props) {
  const {
    isSubmitting,
    error,
    user,
    entries,
    submitAction,
    getEntriesAction
  } = props;

  useEffect(() => {
    console.log("id", props.location.state.id);
    getEntriesAction(props.location.state.id);
  }, []);

  const [editing, setEditing] = useState(entries);
  console.log("editing", editing);

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
    submitAction(entry);
    props.history.push("/journal");
  };

  return (
    <>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/journal">Journal</NavLink>
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
    entries: state.entryReducer.entries,
    error: state.entryReducer.error,
    isSubmitting: state.entryReducer.isSubmitting
  };
};

export default connect(mapStateToProps, { submitAction, getEntriesAction })(
  EntryForm
);
