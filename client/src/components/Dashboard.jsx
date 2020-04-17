import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { newFieldAction } from "../redux/actions/entry-field/newFieldAction";
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

  componentDidMount() {}
  // * newField-feature
  // onChangeHandler = evt => {
  //   this.setState({
  //     ...this.state,
  //     [evt.target.name]: evt.target.value
  //   });
  // };

  // * newField-feature
  // onSubmitHandler = evt => {
  //   evt.preventDefault();
  //   this.props.newFieldAction(this.state.newField, this.props.history);
  // };

  render() {
    return (
      <div className="dashboard">
        {/* <nav>
          <NavLink to="/entry">Entry</NavLink>
          <NavLink to="/journal">Journal</NavLink>
        </nav> */}
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
  connect(mapStateToProps, { logoutAction, newFieldAction, getJournalAction })(
    Dashboard
  )
);
