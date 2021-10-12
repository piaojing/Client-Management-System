import { Component } from 'react';

class TOC extends Component{  
  render(){
    var lists=[];
    var data=this.props.data; // from "App.js/app/render/return/TOC"
    for(var i=0;i<data.length;i++){
      lists.push(<li key="id[i]"><a href={"/content/"+data[i].id}>{data[i].title }</a></li>)
    }
    return (
      <nav>
        <ul>
          {lists} 
        </ul>
      </nav>
    )
  }
}

export default TOC;