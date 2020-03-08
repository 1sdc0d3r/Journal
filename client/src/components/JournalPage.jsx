import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getJournalAction } from "../redux/actions/journal/getJournal";
import { getEntryIdAction } from "../redux/actions/entry/getIdAction";
import { deleteAction } from "../redux/actions/entry/deleteAction";
import "../style/JournalPage/JournalPage.css";
class JournalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      offset: 0
    };
  }

  componentDidMount() {
    const { limit, offset } = this.state;
    this.props.getJournalAction(limit, offset);
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.entries.map(entry => (
          <div key={entry.id} className="entry">
            {/* <p>Entry: {entry.id}</p> */}
            <p>Entry Date: {entry.created_at}</p>
            <p>Modified Date: {entry.modified_at}</p>
            <p>Medication: {entry.medication}</p>
            <p>Dose: {entry.dose}</p>
            <p>Description: {entry.description}</p>
            <button
              onClick={() => {
                this.props.getEntryIdAction(entry.id, this.props.history);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                const { limit, offset } = this.state;
                this.props.deleteAction(entry.id, this.props.history);
                this.props.getJournalAction(limit, offset);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    entries: state.journalReducer.entries
  };
};
export default withRouter(
  connect(mapStateToProps, {
    getJournalAction,
    deleteAction,
    getEntryIdAction
  })(JournalPage)
);
