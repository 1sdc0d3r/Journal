import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { submitAction } from "../redux/actions/entry/submitAction";
import { modifyAction } from "../redux/actions/entry/modifyAction";

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {
        description: props.edit.description || ""
      }
    };
  }

  //   //todo set state to entry fields w/ cwm

  onChangeHandler = evt => {
    this.setState({
      ...this.state,
      entry: {
        ...this.state.entry,
        [evt.target.name]: evt.target.value
      }
    });
  };

  onSubmitHandler = evt => {
    evt.preventDefault();
    this.props.isModifying
      ? this.props.modifyAction(
          this.props.edit.id,
          this.state.entry,
          this.props.history
        )
      : this.props.submitAction(this.state.entry, this.props.history);
  };

  render() {
    // if (!this.props.user.username) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/journal">Journal</NavLink>
        <form onSubmit={this.onSubmitHandler}>
          <h3>{this.props.error}</h3>
          {/* <label>
            entry1:{" "}
            <input
              type="text"
              name="entry1"
              value={this.state.entry.entry1}
              onChange={this.onChangeHandler}
              placeholder="entry1"
            />
          </label>
          <label>
            entry2:{" "}
            <input
              type="text"
              name="entry2"
              value={this.state.entry.entry2}
              onChange={this.onChangeHandler}
              placeholder="entry2"
            />
          </label>{" "} */}
          <label>
            Entry:{" "}
            <input
              type="text"
              name="description"
              value={this.state.entry.description}
              onChange={this.onChangeHandler}
              placeholder="description"
              required
            />
          </label>
          <button type="submit">
            {!this.props.fetching ? "Submit" : "Submitting..."}
          </button>
          <button>add field</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    fetching: state.entryReducer.isFetching,
    isModifying: state.entryReducer.isModifying,
    edit: state.entryReducer.edit,
    error: state.entryReducer.error
  };
};
export default withRouter(
  connect(mapStateToProps, { submitAction, modifyAction })(EntryForm)
);
