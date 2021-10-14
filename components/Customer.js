import React from "react"; 

class Customer extends React.Component{
    render(){
        return (
        <div>
            <CustomerProfile id={this.props.id} name={this.props.name} img={this.props.img} />
            <CustomerInfo hn={this.props.hn} gender={this.props.gender} diag={this.props.diag}/>            
        </div>)
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.img} alt="profileImage"></img>
                <h2>{this.props.name}({this.props.id})</h2> 
                {/* 소괄호를 주어 이름과 아이디를 같이 출력하게 한다. */}
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.hn}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.diag}</p>
            </div>
        )
    }
}

export default Customer;