import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getJournalAction } from "../redux/actions/journal/getJournal";
import { getEntryIdAction } from "../redux/actions/entry/getIdAction";
import { deleteAction } from "../redux/actions/entry/deleteAction";
import { favoriteAction } from "../redux/actions/entry/favoriteAction";
import "../style/JournalPage/JournalPage.css";
import { FaStar } from "react-icons/fa";

//todo create a card component DRY
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

  editBtnHandler = entry => {
    this.props.getEntryIdAction(entry.id, this.props.history);
  };

  favoriteBtnHandler = entry => {
    // const { limit, offset } = this.state;
    this.props.favoriteAction(entry.id, this.props.history);
    // this.props.getJournalAction(limit, offset);
  };

  deleteBtnHandler = entry => {
    const { limit, offset } = this.state;
    this.props.deleteAction(entry.id, this.props.history);
    this.props.getJournalAction(limit, offset);
  };

  render() {
    return (
      <div className="wrapper">
        {this.props.entries.length ? (
          this.props.entries.map(entry => (
            <div key={entry.id} className="entry">
              {entry.favorite && (
                <FaStar
                  color="blue"
                  size="1.25rem"
                  style={{ padding: ".125rem" }}
                />
              )}
              <p>Entry Date: {entry.created_at}</p>
              <p>Modified Date: {entry.modified_at}</p>
              <p>Description: {entry.description}</p>
              <button onClick={() => this.editBtnHandler(entry)}>Edit</button>
              {!entry.favorite && (
                <button onClick={() => this.favoriteBtnHandler(entry)}>
                  Favorite
                </button>
              )}
              <button onClick={() => this.deleteBtnHandler(entry)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <h2 className="no-entries">No Entries</h2>
        )}
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
    getEntryIdAction,
    favoriteAction
  })(JournalPage)
);
