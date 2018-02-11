import React, { Component } from 'react'
import './App.css'
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import Validation from './Validation/Validation'
import Char from './Char/Char'

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
  changeTextHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  removeCharHandler = (index) => {
    this.setState(prevState => {
      let oldtext = prevState.text.split('')
      index ? oldtext.splice(index, 1) : oldtext.shift()
      return {
        text: oldtext.join('')
      }
    })
  }
  
  render() {
    let charList =  this.state.text.split('').map( (char, index) => (
      <Char 
        char={ char }
        key = {index+char} 
        removeChar={ () => this.removeCharHandler(index) }/>
      ) 
    )

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
        <label>Enter text to see it's length
          <br />
          <input type="text" 
              value={ this.state.text } 
              onChange={ this.changeTextHandler } />
        </label>
        <p> You entered { this.state.text.length } character(s)</p>
        <Validation />
        {charList}
      </div>
    );
  }
}

export default App;
