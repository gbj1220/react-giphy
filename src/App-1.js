import React, { Component } from "react";

class App1 extends Component {
  constructor(props) {

    super(props);

    this.state = {
      name: "This shirt is black... ",
      toDoValue: "",
      toDoList: [],
    };
  }


  clickButtonToChangeName = () => {
    this.setState({ name: "NOT!!!" })
  }


  handleInputChange = (event) => {
    this.setState({
      toDoValue: event.target.value,
    })
  };


  handleInputSubmit = (event) => {
    
    let newArray = [
      ...this.state.toDoList,
      { id: this.state.toDoList.length + 1, todo: this.state.toDoValue}
    ]

    this.setState({
      toDoList: newArray
    })
  };


  render() {
    // can put logic in here
    return (
      <div style={{ textAlign: "center", marginTop: 350 }}>
        <div>
          <p>This is my current Input: {this.state.toDoValue}</p>
          <input type="text" name="todo" onChange={this.handleInputChange} value="this.state." />
          <button onClick={this.handleInputSubmit}>Submit</button>
          <div>
            <ul>
              {
                this.state.toDoList.map((item, index) => {
                  return <li key={index}>{item.todo}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default App;