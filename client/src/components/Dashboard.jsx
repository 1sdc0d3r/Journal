import React, { Component } from "react";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    };
  }

  // componentDidMount() {
  //   if (!this.props.user.username) {
  //     this.setState({ redirect: "/login" });
  //   }
  // }

  render() {
    // if (this.state.redirect) {
    //   return <Redirect to={this.state.redirect} />;
    // }

    return (
      <>
        <nav>
          <NavLink to="/entry">Entry</NavLink>
          <NavLink to="/journal">Journal</NavLink>
        </nav>
        <h2>Dashboard</h2>
        {this.props.error ? (
          <h2>{this.props.error}</h2>
        ) : (
          <h2>Welcome: {this.props.user.username}</h2>
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.userReducer.user };
};
export default connect(mapStateToProps, {})(Dashboard);
