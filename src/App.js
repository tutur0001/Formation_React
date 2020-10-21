import React, { Component, Fragment } from 'react' 
import './App.css';
import Membre from './components/Membre'

class App extends Component { 
  render() {
    return(
      <Fragment>
        <div className='App'>
          <h1>First App in react</h1>
          <Membre />
        </div>
      </Fragment>
    )
  }
}

export default App;
