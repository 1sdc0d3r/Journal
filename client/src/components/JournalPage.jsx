import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEntriesAction } from "../actions/entry/getAction";

function JournalPage(props) {
  const { getEntriesAction, entries } = props;
  useEffect(() => {
    getEntriesAction();
  }, []);

  return (
    <>
      {entries.map(entry => (
        <div>
          <p>Entry Date: {entry.created_at}</p>
          <ul>
            <li>
              Medication: {entry.medication} - Dose: {entry.dose}
            </li>
          </ul>
          <p>Description: {entry.description}</p>
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
export default connect(mapStateToProps, { getEntriesAction })(JournalPage);
