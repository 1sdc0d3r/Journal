import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import EntryCard from "./EntryCard";
import NavButtons from "./NavButtons";
// * STYLE
import "../style/entries/Entries.css";
// * REDUX
import { connect } from "react-redux";
import { getJournalAction } from "../redux/actions/journal/getJournal";
import { getEntryIdAction } from "../redux/actions/entry/getIdAction";
import { deleteAction } from "../redux/actions/entry/deleteAction";
import { favoriteAction } from "../redux/actions/entry/favoriteAction";
// * ICONS
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Entry from "./Entry";

//todo create a card component DRY
class JournalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      offset: 0,
      page: 1,
      entries: [],
    };
  }

  componentWillMount() {
    const { limit, offset } = this.state;
    this.props.getJournalAction();
    this.setState({
      ...this.state,
      entries: this.props.entries.slice(offset, limit),
    });
  }

  editBtnHandler = (entry) => {
    this.props.getEntryIdAction(entry.id, this.props.history);
  };

  favoriteBtnHandler = (entry) => {
    this.props.favoriteAction(entry.id, this.props.history);
  };

  deleteBtnHandler = (entry) => {
    this.props.deleteAction(entry.id, this.props.history);
  };

  //todo refactor Previous/Next BTN handlers
  previousBtnHandler = () => {
    const { limit, offset, page } = this.state;
    this.setState({
      ...this.state,
      offset: offset - limit,
      page: page - 1,
      entries: this.props.entries.slice(offset - limit, limit * (page - 1)),
    });
  };

  nextBtnHandler = () => {
    const { limit, offset, page } = this.state;
    this.setState({
      ...this.state,
      offset: offset + limit,
      page: page + 1,
      entries: this.props.entries.slice(offset + limit, offset + limit * 2),
    });
  };

  render() {
    if (!this.props.entries.length) {
      return <Redirect to="/dashboard" />;
    }
    console.log("state", this.state);
    // console.log("entries", this.props.entries);

    return (
      <div className="journal">
        <h1>Journal</h1>
        <div className="entries">
          {this.state.entries.length ? (
            this.state.entries.map((entry) => (
              <EntryCard
                entry={entry}
                favoriteHandler={this.favoriteBtnHandler}
                editHandler={this.editBtnHandler}
                deleteHandler={this.deleteBtnHandler}
              />
            ))
          ) : (
            <h2 className="no-entries">No Entries</h2>
          )}
        </div>
        <NavButtons
          state={this.state}
          back={this.previousBtnHandler}
          next={this.nextBtnHandler}
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
  })(JournalPage)
);
