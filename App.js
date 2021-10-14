import React, { Component } from 'react';
// import logo from "./logo.svg";
import Customer from './components/Customer';
import './App.css';

const patient={
  "name":"Noi",
  "hn":"1712084",
  "gender":"male",
  "diag":"healthy"
}

class App extends Component {
  render() {
    return (
      <Customer
        name={patient.name}
        hn={patient.hn}
        gender={patient.gender}
        diag={patient.diag}
      ></Customer>
    );
  }
}

export default App;