import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { getEntriesAction } from "../actions/entry/getAction";
import { deleteAction } from "../actions/entry/deleteAction";

function JournalPage(props) {
  const { entries, getEntriesAction, deleteAction } = props;

  // const [edit, setEdit] = useState(false);

  useEffect(() => {
    getEntriesAction();
  }, []);

  return (
    <>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/entry">Entry</NavLink>
      {/* {edit ? <Redirect to="/entry" /> : null} */}
      {entries.map(entry => (
        <div>
          <p>Entry: {entry.id}</p>
          <p>Entry Date: {entry.created_at}</p>
          <ul>
            <li>
              Medication: {entry.medication} - Dose: {entry.dose}
            </li>
          </ul>
          <p>Description: {entry.description}</p>
          <button
            onClick={() => {
              // getEntriesAction(entry.id);
              // setEdit(true);
              props.history.push({
                pathname: "/entry",
                state: { id: entry.id }
              });
            }}
          >
            Edit
          </button>

          <button onClick={() => deleteAction(entry.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

const mapStateToProps = state => {
  return {
    entries: state.entryReducer.entries
  };
};
export default connect(mapStateToProps, { getEntriesAction, deleteAction })(
  JournalPage
);
