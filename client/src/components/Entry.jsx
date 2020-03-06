import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { submitAction } from "../redux/actions/entry/submitAction";
import { modifyAction } from "../redux/actions/entry/modifyAction";

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {
        medication: props.edit.medication || "",
        dose: props.edit.dose || "",
        description: props.edit.description || ""
      }
    };
  }

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
    if (!this.props.user.id) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/journal">Journal</NavLink>
        <form onSubmit={this.onSubmitHandler}>
          <h3>{this.props.error}</h3>
          <label>
            medication:{" "}
            <input
              type="text"
              name="medication"
              value={this.state.entry.medication}
              onChange={this.onChangeHandler}
              placeholder="medication"
            />
          </label>
          <label>
            dose:{" "}
            <input
              type="text"
              name="dose"
              value={this.state.entry.dose}
              onChange={this.onChangeHandler}
              placeholder="dose"
            />
          </label>{" "}
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
export default connect(mapStateToProps, { submitAction, modifyAction })(
  EntryForm
);
