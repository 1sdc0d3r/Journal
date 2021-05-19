import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import EntryCard from "./EntryCard";
import NavButtons from "./NavButtons";
import { getJournalAction } from "../Redux/actions/journal/getJournal";
import { getEntryIdAction } from "../Redux/actions/entry/getIdAction";
import { deleteAction } from "../Redux/actions/entry/deleteAction";
import { favoriteAction } from "../Redux/actions/entry/favoriteAction";

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
  render() {
    const { limit, offset } = this.state;
    return (
      <div className="favorites journal">
        <h1>Favorites</h1>
        <div className="entries">
          {this.props.entries.filter((e) => e.favorite).length ? (
            this.props.entries
              .filter((e) => e.favorite)
              .sort((a, b) => a.id - b.id)
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
            <>
              <h2 className="no-entries">No Favorite Entries</h2>
              <button onClick={() => this.props.history.push("/journal")}>
                Journal
              </button>
            </>
          )}
        </div>
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
