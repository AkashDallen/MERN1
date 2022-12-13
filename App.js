import './App.css';
import { Component } from 'react';
import Intro from './component/Intro';
import Qualification from './component/Qualification';

class App extends Component{
  constructor(props){
  super(props);

  this.state={
    name:"aisha",
    address:"belgaum",
    qualification:[{
      Degree:"MCA",
      Marks:45,
      College:"RVCE"
      }]
  }
}
render(){
  return(
    <>
    <Intro
    name={this.state.name}
    address={this.state.address}
    />
   
    <Qualification qualification={this.state.qualification}
    />
    </>
  )
}
}

export default App;
