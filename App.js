import { Component } from 'react';
import './App.css';
import Subject from './components/Subject'
import TOC from './components/TOC'
import Content from './components/Content'

class App extends Component {
  constructor(props){ 
    super(props); 
    this.state={
      mode:null,
      welcome:{title:"welcome", desc:"Hello, react!"},
      Subject:{
        title:'WEB', sub:'Hello WEB from state function'
      },
      contents:[
        {id:1, title:"HTML", desc:"HTML is hypertext markup language"},
        {id:2, title:"CSS", desc:"CSS is cascading style sheet"},
        {id:3, title:"Javascript", desc:"Javascript is web programing language"}
      ]
    }
  }
  
  render(){
    var _title, _desc = null;
    if (this.state.mode==="welcome"){
      _title=this.state.welcome.title
      _desc=this.state.welcome.desc
    } else if (this.state.mode==="read"){
      _title=this.state.contents[0].title
      _desc=this.state.contents[0].desc
    }
    return (
      <div className="App">
      {/* <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}></Subject> */}
      <header>
        {/* preventDefault()로 onClick사건이 일어날때 페지리로드를 막아준다 */}
        <h1><a href="/" 
          onClick={
            function(e){
              console.log(e); 
              e.preventDefault();
              // eslint-disable-next-line react/no-direct-mutation-state
              this.setState({mode:"welcome"});
            }.bind(this)            
          }>{this.state.Subject.title}</a></h1>
        {this.state.Subject.sub}
      </header>
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}
export default App;

// 총정리
/** 
 *app.js 는 부모, compenets안의 js파일들은 자식 
 * 부모에서 입력한 리턴값(실제값)을 자식들에게서 받게 하는 방법(props)
 *    속성값(title, desc...)을 정해주고 이것을 자식파일에서 {this.props.title}형태로 해당 위치에 넣어주는 방법 
 *      우의 실례에서 "<Content title=...."
 *    state를 써서 같은 파일의 생성자(constructor)에서 정의한 state로부터 받는 방법: 
 *      우의 실례에서 "<TOC data={this.state.contents}></TOC>" 로 입력할 부분을 선언하고 구체적인
 *      contents는 우의 state에서 넣어준다.
 * 자식에서 입력한 실제값을 부모가 받는 방법
 *  그냥 app에서 정의해준 태그를 입력하면 된다. 
 *  정의해준 태그는 개별적인 파일로 만들어 안에 그 태그에 해당한 실제 html파일을 작성한다.
 *
 * 부모파일에서는 선언한 태그 자식파일에서는 실제 html태그가 들어간다.
 * state에는 실제 자료들이 들어간다.
*/
