import React, { Component } from 'react' 
import './App.css';
import Membre from './components/Membre'


// Component StateFul
class App extends Component { 
  render() {
    const { titre } = this.props
    return(
        <div className='App'>
          <h1>{ titre }</h1>
          <Membre nom= 'Arthur' />
          <Membre nom= 'Apolline' />
          <Membre nom= 'Bilel' />
          <Membre nom= 'Test' />
        </div>
    )
    }
}
// 

export default App;
  