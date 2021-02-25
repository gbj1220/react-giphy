import React, { Component } from "react";
import ChildMovie from "./ChildMovie";

class ParentMovie extends Component {
  state = {
    movieListArray: [],
    movieValue: "",
  };


  handleOnChange = (event) => {
    this.setState({
      movieValue: event.target.value, //setting movieValue in the state
    });
  };

  //movieValue === user input
  handleOnClick = (event) => {
    let movieListArray = [
      ...this.state.movieListArray,
      {
        id: this.state.movieListArray.length + 1, //making an id number for each item in array
        movie: this.state.movieValue, //setting the new value for movieValue and setting it to movie
      },
    ];

    this.setState({
      movieListArray: movieListArray,
      movieValue: "",
    });
  };

  render() {
    return (
      <div style={style.divStyle}>
        <input
          type="text"
          name="movieValue"   //movieValue is the placeholder for the new user string
          value={this.state.movieValue}
          onChange={this.handleOnChange}
        />
        <br />
        <button onClick={this.handleOnClick}>Submit</button>
        <ChildMovie
          name={"Child 1"}
          movieListArray={this.state.movieListArray}
          age={63}
        />
      </div>
    );
  }
}





const style = {
  divStyle: {
    textAlign: "center",
    marginTop: 250,
  },
  
  buttonStyle: {
    width: 250,
    backgroundColor: "red",
  },
};

export default ParentMovie;