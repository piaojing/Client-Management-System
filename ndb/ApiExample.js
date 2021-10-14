import React, {Component} from "react";
import ReactDOM from "react-dom";

class ApiExapmle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:""
        }
    }

    // callAPI함수로 써버에 접근하여 자료를 받아온후 그 것을 콘솔대신 setState로 this.state의 값을 변경하는 함수로 처리한다. 
    callAPI=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json=>{
                this.setState({
                    data: json.title // this.state의 data값을 json.title로 넣어줌 
                })
            })
    }

    // callAPI를 호출한다. componentDidMount는 렌더가 진행된다음에 호출한다는것임
    componentDidMount(){
        this.callAPI();
    }
    render(){
        return (
            <h1>
            {/* {this.state.data} 이 함수를 쓸수 없는 리유는 렌더가 진행된다음 state에 값을 
            넣어주므로 data값이 있는가 없는가를 확인해주어야 한다.*/}
            {this.state.data?this.state.data:"업로드중입니다."}
            </h1>
        )
    }    
}

ReactDOM.render(<ApiExapmle/>, document.getElementById("root"))
// export default ApiExapmle;
