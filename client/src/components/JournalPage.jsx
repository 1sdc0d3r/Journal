import React, { Component } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import EntryCard from "./EntryCard";
import NavButtons from "./NavButtons";
// * STYLE
import "../style/journal/Journal.css";
// * REDUX
import { connect } from "react-redux";
import { getJournalAction } from "../redux/actions/journal/getJournal";
import { getEntryIdAction } from "../redux/actions/entry/getIdAction";
import { deleteAction } from "../redux/actions/entry/deleteAction";
import { favoriteAction } from "../redux/actions/entry/favoriteAction";
// * ICONS

//todo create a card component DRY
//todo allow user to go straight to journal page without hitting dash first (getJournalAction)
class JournalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      offset: 0,
      page: 1,
    };
  }
  //todo fix showing journal after inputting new entry and redirect

  componentDidMount() {
    const { limit, offset } = this.state;
    this.props.getJournalAction(limit, offset);
  }

  editBtnHandler = (entry) => {
    this.props.getEntryIdAction(entry.id, this.props.history);
  };

  favoriteBtnHandler = (entry) => {
    const { limit, offset } = this.state;
    this.props.favoriteAction(entry.id, this.props.history);
    this.props.getJournalAction(limit, offset);
  };

  deleteBtnHandler = (entry) => {
    const { limit, offset } = this.state;
    this.props.deleteAction(entry.id, this.props.history);
    this.props.getJournalAction(limit, offset);
  };

  render() {
    const { limit, offset, page } = this.state;
    return (
      <div className="journal">
        <h1>Journal</h1>
        <div className="entries">
          {this.props.entries.length ? (
            this.props.entries
              .slice(offset, offset + limit)
              .map((entry) => (
                <EntryCard
                  entry={entry}
                  favoriteHandler={this.favoriteBtnHandler}
                  editHandler={this.editBtnHandler}
                  deleteHandler={this.deleteBtnHandler}
                />
              ))
          ) : (
            <div className="no-entries">
              <h2>You don't have any entries...</h2>
              <button onClick={() => this.props.history.push("/entry")}>
                Add your first entry!
              </button>
            </div>
          )}
        </div>
        {/* //? btn handlers? */}
        <NavButtons
          state={this.state}
          back={() =>
            this.setState({
              ...this.state,
              offset: offset - limit,
              page: page - 1,
            })
          }
          next={() =>
            this.setState({
              ...this.state,
              offset: offset + limit,
              page: page + 1,
            })
          }
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    entries: state.journalReducer.entries,
    authenticated: state.userReducer.authenticated,
  };
};
export default withRouter(
  connect(mapStateToProps, {
    getJournalAction,
    deleteAction,
    getEntryIdAction,
    favoriteAction,
  })(JournalPage)
);
