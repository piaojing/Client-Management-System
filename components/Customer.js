import React from "react"; 

class Customer extends React.Component{
    render(){
        return (
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.hn}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.diag}</p>
        </div>)
    }
}

export default Customer;