import React, { Component } from 'react' 
import './App.css';
import Membre from './components/Membre'

const famille = {

  membre1: {
    nom: 'Arthur',
    age: 19
  },
  membre2: {
    nom: 'Apolline',
    age: 22
  },
  membre3: {
    nom: 'Bilel',
    age: 19
  },
  membre4: {
    nom: 'Adam',
    age: 24
  }
}

// Component StateFul
class App extends Component { 
  state = {famille}
  handleClick = () => {
    const famille = { ...this.state.famille }
    famille.membre1.age += 1 
    this.setState({ famille })  
  }

  render() {
    const { titre } = this.props
    const { famille } = this.state
    return( 
        <div className='App'>
          <h1>{ titre }</h1>
          <Membre nom={famille.membre1.nom} age={famille.membre1.age}/>
          <Membre nom= {famille.membre2.nom} age={famille.membre2.age}/>
          <Membre nom= {famille.membre3.nom} age={famille.membre3.age}/>
          <Membre nom= {famille.membre4.nom} age={famille.membre4.age}/>

          <button onClick={this.handleClick}>Vieillir</button>
        </div>
    )
    }
}
  // 

export default App;
  