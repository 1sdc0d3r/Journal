import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import { getToken } from "../utils/authService";
import { newFieldAction } from "../redux/actions/entry-field/newFieldAction";
import { getJournalAction } from "../redux/actions/journal/getJournal";
import { logoutAction } from "../redux/actions/user/logoutAction";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      newField: "",
    };
  }

  componentDidMount() {
    // const token = getToken();
    this.props.getJournalAction();
    if (!this.props.loggedIn) {
      this.setState({ redirect: "/login" });
      alert("no user");
      // this.props.logoutAction();
    }
  }
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
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
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
          <h2>Welcome: {this.props.user.first_name}</h2>
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
  return { user: state.userReducer.user, loggedIn: state.userReducer.user };
};

export default withRouter(
  connect(mapStateToProps, { logoutAction, newFieldAction, getJournalAction })(
    Dashboard
  )
);
