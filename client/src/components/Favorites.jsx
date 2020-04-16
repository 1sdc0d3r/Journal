import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import EntryCard from "./EntryCard";
import NavButtons from "./NavButtons";
import { getJournalAction } from "../redux/actions/journal/getJournal";
import { getEntryIdAction } from "../redux/actions/entry/getIdAction";
import { deleteAction } from "../redux/actions/entry/deleteAction";
import { favoriteAction } from "../redux/actions/entry/favoriteAction";

// todo combine with JournalPage based off of history.location.current? (/journal vs /favorite)
class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      offset: 0,
      page: 1,
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

  previousBtnHandler = () => {
    const { limit, offset, page } = this.state;
    this.setState({
      ...this.state,
      offset: offset - limit,
      page: page - 1,
      // entries: this.props.entries.slice(offset - limit, limit * (page - 1)),
    });
  };

  nextBtnHandler = () => {
    const { limit, offset, page } = this.state;
    this.setState({
      ...this.state,
      offset: offset + limit,
      page: page + 1,
      // entries: this.props.entries.slice(offset + limit, offset + limit * 2),
    });
  };
  // todo rendering 3 cards per page...
  render() {
    const { limit, offset } = this.state;
    console.log({ limit }, { offset });
    return (
      <div className="favorites journal">
        <h1>Favorites</h1>
        <div className="entries">
          {this.props.entries.length ? (
            this.props.entries
              .filter((e) => e.favorite)
              .slice(offset, offset + limit)
              .map((entry, i) => {
                if (entry.favorite) {
                  return (
                    <EntryCard
                      key={i}
                      entry={entry}
                      favoriteHandler={this.unFavoriteBtnHandler}
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
        {/*//todo filter down to entries w/ favorite  */}
        <NavButtons
          state={this.state}
          back={this.previousBtnHandler}
          next={this.nextBtnHandler}
          path={this.props.location.pathname}
        />
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
