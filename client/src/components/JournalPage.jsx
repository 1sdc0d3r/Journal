import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getEntriesAction } from "../redux/actions/entry/getAction";
import { deleteAction } from "../redux/actions/entry/deleteAction";
class JournalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getEntriesAction();
  }

  render() {
    if (!this.props.user.username) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/entry">Entry</NavLink>
        {this.props.entries.map(entry => (
          <div key={entry.id}>
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
                this.props.getEntriesAction(entry.id, this.props.history);
              }}
            >
              Edit
            </button>

            <button
              onClick={() => {
                this.props.deleteAction(entry.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    entries: state.entryReducer.entries
  };
};
export default connect(mapStateToProps, { getEntriesAction, deleteAction })(
  JournalPage
);
