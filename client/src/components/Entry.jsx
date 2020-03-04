import React, { Component, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
export default class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      error: null,
      entry: {
        medication: null,
        dose: null,
        description: null
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
    axiosWithAuth()
      .post("http://localhost:5000/api/entry", this.state.entry)
      .then(res => console.log(res));
  };

  render() {
    return (
      <>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/journal">Journal</NavLink>
        <form onSubmit={this.onSubmitHandler}>
          {!this.state.error ? null : <h3>{this.state.error}</h3>}
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
            {!this.isSubmitting ? "Submit" : "Submitting..."}
          </button>
        </form>
      </>
    );
  }
}
