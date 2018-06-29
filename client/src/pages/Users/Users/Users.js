import React, { Component } from "react";
import API from "../../../utils/API";

class Users extends Component {
  state = {
    alias:'',
    imageURL:'',
    email:"",
    firstName:"",
    lastName:"",
    street:"",
    apartment:"",
    city:"",
    state:"",
    zip:"",
    age:"",
    status: true
  };


  
  render() {
    return (
     <h2>Users</h2>
    );
  }
}

export default Users;
