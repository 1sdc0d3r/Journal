import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import EntryCard from "./EntryCard";
import { getJournalAction } from "../redux/actions/journal/getJournal";
import { getEntryIdAction } from "../redux/actions/entry/getIdAction";
import { deleteAction } from "../redux/actions/entry/deleteAction";
import { favoriteAction } from "../redux/actions/entry/favoriteAction";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      offset: 0,
    };
  }

  componentDidMount() {
    const { limit, offset } = this.state;
    this.props.getJournalAction(limit, offset);
  }

  editBtnHandler = (entry) => {
    this.props.getEntryIdAction(entry.id, this.props.history);
  };
  unFavoriteBtnHandler = (entry) => {
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
    return (
      <div className="favorites journal">
        <h1>Favorites</h1>
        <div className="entries">
          {this.props.entries.length ? (
            this.props.entries.map((entry) => {
              if (entry.favorite) {
                return (
                  <EntryCard
                    entry={entry}
                    favoriteHandler={this.favoriteBtnHandler}
                    editHandler={this.editBtnHandler}
                    deleteHandler={this.deleteBtnHandler}
                  />
                );
              }
            })
          ) : (
            <h2 className="no-entries">No Favorite Entries</h2>
          )}
        </div>
        {/* //todo incorporate back/next btns */}
        {/* <NavButtons /> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    entries: state.journalReducer.entries,
  };
};
export default withRouter(
  connect(mapStateToProps, {
    getJournalAction,
    deleteAction,
    getEntryIdAction,
    favoriteAction,
  })(Favorites)
);
