import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getEntriesAction } from "../actions/entry/getAction";
import { deleteAction } from "../actions/entry/deleteAction";

function JournalPage(props) {
  const { entries, getEntriesAction, deleteAction } = props;
  useEffect(() => {
    getEntriesAction();
  }, []);

  return (
    <>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/entry">Entry</NavLink>
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
