import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default class JournalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      editing: false
    };
  }
  componentWillMount() {
    //todo get entries
    axiosWithAuth()
      .get(`http://localhost:5000/api/entry`)
      .then(res => this.setState({ entries: res.data }))
      .catch(err => console.log(err));
  }

  editEntry = id => {};
  deleteEntry = id => {};

  render() {
    if (this.state.editing) {
      return <Redirect to="/entry" />;
    }
    return (
      <>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/entry">Entry</NavLink>
        {this.state.entries.map(entry => (
          <div>
            <p>Entry: {entry.id}</p>
            <p>Entry Date: {entry.created_at}</p>
            <ul>
              <li>
                Medication: {entry.medication} - Dose: {entry.dose}
              </li>
            </ul>
            <p>Description: {entry.description}</p>
            <button onClick={() => {}}>Edit</button>

            <button onClick={() => {}}>Delete</button>
          </div>
        ))}
      </>
    );
  }
}
