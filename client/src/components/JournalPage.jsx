import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getEntriesAction } from "../redux/actions/entry/getAction";
import { getEntryIdAction } from "../redux/actions/entry/getIdAction";
import { deleteAction } from "../redux/actions/entry/deleteAction";
class JournalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      offset: 0
    };
  }

  //? is there a way to merge these together?
  componentDidMount() {
    const { limit, offset } = this.state;
    this.props.getEntriesAction(limit, offset);
  }
  // componentDidUpdate() {
  //   this.props.getEntriesAction();
  // }

  render() {
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
                this.props.getEntryIdAction(entry.id, this.props.history);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                this.props.deleteAction(entry.id, this.props.history);
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
export default withRouter(
  connect(mapStateToProps, {
    getEntriesAction,
    deleteAction,
    getEntryIdAction
  })(JournalPage)
);
