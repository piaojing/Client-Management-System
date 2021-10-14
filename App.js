import React, { Component } from 'react';
// import logo from "./logo.svg";
import Customer from './components/Customer';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>IMAGE</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>GENDER</TableCell>
              <TableCell>HN</TableCell>
              <TableCell>DIAGNOSIS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map(c=>{return(<Customer key={c.id} id={c.id} img={c.img} name={c.name} hn={c.hn} gender={c.gender} diag={c.diag}></Customer>)})}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;