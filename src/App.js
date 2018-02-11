import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    username: "Liuda",
    text: '',
  }

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value,
    })
  }
  changeTextHandler =(event) => {
    this.setState({
      text: event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My React App</h1>
        </header>
        <UserOutput name={ this.state.username } />
        <UserOutput name="Raphael" />
        <UserInput 
          changed={ this.changeNameHandler } 
          startingName={ this.state.username } />
        <hr style={{ width: "60%" }} />
        <lable>Enter text to see it's length
          <br />
          <input type="text" 
              value={ this.state.text } 
              onChange={ this.changeTextHandler } />
        </lable>
        <p> You entered { this.state.text.length } character(s)</p>
        <Validation />
      </div>
    );
  }
}

export default App;
