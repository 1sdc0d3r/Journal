import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
// * STYLE
import "../style/journalPage/JournalPage.css";
// * REDUX
import { connect } from "react-redux";
import { getJournalAction } from "../redux/actions/journal/getJournal";
import { getEntryIdAction } from "../redux/actions/entry/getIdAction";
import { deleteAction } from "../redux/actions/entry/deleteAction";
import { favoriteAction } from "../redux/actions/entry/favoriteAction";
// * ICONS
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

//todo create a card component DRY
class JournalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      offset: 0,
      page: 1,
      entries: []
    };
  }

  componentWillMount() {
    const { limit, offset } = this.state;
    this.props.getJournalAction();
    this.setState({
      ...this.state,
      entries: this.props.entries.slice(offset, offset + limit)
    });
  }

  editBtnHandler = entry => {
    this.props.getEntryIdAction(entry.id, this.props.history);
  };

  favoriteBtnHandler = entry => {
    this.props.favoriteAction(entry.id, this.props.history);
  };

  deleteBtnHandler = entry => {
    this.props.deleteAction(entry.id, this.props.history);
  };

  previousBtnHandler = () => {
    const { limit, offset, page } = this.state;
    this.setState({
      ...this.state,
      offset: offset - limit,
      page: page - 1,
      entries: this.props.entries.slice(offset - limit, offset - limit * 2)
    });
  };

  nextBtnHandler = () => {
    const { limit, offset, page } = this.state;
    //todo refactor this code
    this.setState({
      ...this.state,
      offset: offset + limit,
      page: page + 1,
      entries: this.props.entries.slice(offset + limit, offset + limit * 2)
    });
  };

  render() {
    const { limit, offset, page } = this.state;
    if (!this.props.entries.length) {
      return <Redirect to="/dashboard" />;
    }
    console.log("state", this.state);
    console.log("entries", this.props.entries);

    return (
      <div className="journal">
        <div className="entries">
          {this.state.entries.length ? (
            this.state.entries.map(entry => (
              <div key={entry.id} className="entry">
                {entry.favorite ? (
                  <FaStar
                    color="blue"
                    size="1.25rem"
                    style={{ padding: ".125rem" }}
                    onClick={() => this.favoriteBtnHandler(entry)}
                  />
                ) : (
                  <FaRegStar
                    color="blue"
                    size="1.25rem"
                    style={{ padding: ".125rem" }}
                    onClick={() => this.favoriteBtnHandler(entry)}
                  />
                )}
                <p>Entry Date: {entry.created_at}</p>
                <p>Modified Date: {entry.modified_at}</p>
                <p>Description: {entry.description}</p>
                <button onClick={() => this.editBtnHandler(entry)}>Edit</button>
                <button onClick={() => this.deleteBtnHandler(entry)}>
                  Delete
                </button>
              </div>
            ))
          ) : (
            <h2 className="no-entries">No Entries</h2>
          )}
        </div>
        <div className="nav-btns">
          {this.state.page === 1 ? (
            <IoMdArrowBack color="grey" onClick={() => null} />
          ) : (
            <IoMdArrowBack color="red" onClick={this.previousBtnHandler} />
          )}
          {this.props.entries.length / limit < page ? (
            <IoMdArrowForward color="grey" onClick={() => null} />
          ) : (
            <IoMdArrowForward color="red" onClick={this.nextBtnHandler} />
          )}
        </div>
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
