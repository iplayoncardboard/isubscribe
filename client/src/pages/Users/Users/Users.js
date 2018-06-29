import React, { Component } from "react";
import API from "../../../utils/API";

class Users extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };



  render() {
    return (
     <h2>Users</h2>
    );
  }
}

export default Users;
