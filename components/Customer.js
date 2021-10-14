import React from "react"; 
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Customer extends React.Component{
    render(){
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.img} alt="profileImage"></img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.hn}</TableCell>
                <TableCell>{this.props.diag}</TableCell>
            </TableRow>
            )
    }
}

export default Customer;