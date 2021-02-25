import React, { Component } from 'react'

export default class App extends Component {
  state = {
    isTrue: false,
    name: "hamster",
  };

  toggleButton = () => {
    // isTrue: !this.state.isTrue,
    <div style={style.buttonStyle} ></div>
    this.setState((prevState) => {
      return {
        isTrue: !prevState.isTrue,
      }
    });
  }

  render() {
    return <div backgroundColor="red">
      <div style={style.divStyle}>
        <div>
          <button onClick={this.toggleButton}>Toggle Me</button>
        </div>
        <div>
          {this.state.isTrue ? <span>{this.state.name}</span> : <span>Not showing Hamster</span>}
        </div>
      </div>
    </div>
  }
}

const style = {
  divStyle: {
    textAlign: "center",
    backgroundColor: "purple",
    color: "tomato",
    marginTop: 250,
  },

  buttonStyle: {
    color: "red",
  }
}