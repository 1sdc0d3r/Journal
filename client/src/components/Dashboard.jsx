import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import { newFieldAction } from "../redux/actions/entry-field/newFieldAction";
import { getJournalAction } from "../redux/actions/journal/getJournal";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      newField: ""
    };
  }

  componentDidMount() {
    if (!this.props.user.username) {
      this.setState({ redirect: "/login" });
      this.props.getJournalAction();
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
const mapStateToProps = state => {
  return { user: state.userReducer.user };
};

export default withRouter(
  connect(mapStateToProps, { newFieldAction, getJournalAction })(Dashboard)
);
