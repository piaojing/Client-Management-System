import { Component } from 'react';

class Subject extends Component{ //Subject라는 컴포넌트 정의, 첫글자는 무조건 대문자로 표기, 
    render(){
      return (
        <header>        
          <h1><a href="/" 
            onClick={function(e){
              console.log(e); 
              e.preventDefault();
              this.props.onChangePage();            
            }.bind(this)}
            >{this.props.title}</a></h1>
            {this.props.sub}
        </header>
      )
    }
}

export default Subject;