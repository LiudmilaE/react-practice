import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    username: "Liuda",
  }

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My React App</h1>
        </header>
        <UserOutput name={this.state.username} />
        <UserOutput name="Lida" />
        <UserOutput name="Raphael" />
        <UserInput 
          changed={this.changeNameHandler} 
          startingName={this.state.username} />
      </div>
    );
  }
}

export default App;
