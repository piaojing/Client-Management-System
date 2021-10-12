import { Component } from 'react';
import './App.css';

class Subject extends Component{ //Subject라는 컴포넌트 정의, 첫글자는 무조건 대문자로 표기, 
  render(){
    return (
      <header>
      <h1>Web</h1>
      world wide web!
    </header>
    )
  }
}

class NavComp extends Component{  
  render(){
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    )
  }
}

class Content extends Component{  
  render(){
    return (
      <article>
      <h2>HTML</h2>
      HTML is hyper text markup language
    </article>
    )
  }
}

class App extends Component
{
  render(){
    return (
      <div className="App">
      <Subject></Subject>
      <NavComp></NavComp>
      <Content></Content>
      </div>
    )
  }
}
export default App;
