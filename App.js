import React, { Component } from 'react';
// import logo from "./logo.svg";
import Customer from './components/Customer';
import './App.css';

const patients=[{
  "id":1,
  "img":"http://placeimg.com/64/64/1",
  "name":"Noi",
  "hn":"1712084",
  "gender":"male",
  "diag":"healthy"
},
{
  "id":2,
  "img":"http://placeimg.com/64/64/2",
  "name":"Van",
  "hn":"1712082",
  "gender":"male",
  "diag":"hepatitis"
},
{
  "id":3,
  "img":"http://placeimg.com/64/64/3",
  "name":"Koi",
  "hn":"1712984",
  "gender":"female",
  "diag":"GI bleeding"
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          patients.map(c=>{
            return(
            <Customer
              key={c.id}
              id={c.id}
              img={c.img}
              name={c.name}
              hn={c.hn}
              gender={c.gender}
              diag={c.diag}
            ></Customer>)
          })
        }
      </div>
    );
  }
}

export default App;