import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getJournalAction } from "../redux/actions/journal/getJournal";
import { logoutAction } from "../redux/actions/user/logoutAction";
import { getUser } from "../utils/authService";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: getUser() || "",
    };
  }
  // * newField-feature

  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        {this.props.error ? (
          <h2>{this.props.error}</h2>
        ) : (
          <h2>Welcome: {this.state.firstName}</h2>
        )}
        {/* // * newField-feature */}
        {/* <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="newField"
            value={this.state.newField}
            onChange={this.onChangeHandler}
            placeholder="New Field"
          />
          <button type="submit">add field</button>
        </form> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.userReducer.authenticated,
  };
};

export default withRouter(
  connect(mapStateToProps, { logoutAction, getJournalAction })(Dashboard)
);
