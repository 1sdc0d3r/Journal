import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { submitAction } from "../redux/actions/entry/submitAction";
import { modifyAction } from "../redux/actions/entry/modifyAction";
import "../style/entry/Entry.css";

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {
        description: props.edit.description || "",
      },
    };
  }

  //todo set state to entry fields w/ cwm

  onChangeHandler = (evt) => {
    this.setState({
      ...this.state,
      entry: {
        ...this.state.entry,
        [evt.target.name]: evt.target.value,
      },
    });
  };

  onSubmitHandler = (evt) => {
    evt.preventDefault();
    if (this.state.entry.description !== "") {
      this.props.isModifying
        ? this.props.modifyAction(
            this.props.edit.id,
            this.state.entry,
            this.props.history
          )
        : this.props.submitAction(this.state.entry, this.props.history);
    }
  };

  render() {
    // if (!this.props.user.username) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <div className="entry">
        <h1>New Entry</h1>
        <form>
          {this.props.error && <h3>{this.props.error}</h3>}
          <label htmlFor="description">
            {/* Entry:{" "} */}
            <textarea
              name="description"
              rows="6"
              value={this.state.entry.description}
              onChange={this.onChangeHandler}
              placeholder="description"
              required
            />
          </label>
          <button onClick={this.onSubmitHandler}>
            {!this.props.fetching ? "Submit" : "Submitting..."}
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    fetching: state.entryReducer.isFetching,
    isModifying: state.entryReducer.isModifying,
    edit: state.entryReducer.edit,
    error: state.entryReducer.error,
  };
};
export default withRouter(
  connect(mapStateToProps, { submitAction, modifyAction })(EntryForm)
);
