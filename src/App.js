import React, { Component } from 'react';
import axios from "axios";

export default class App extends Component {


  state = {
    isLoading: true,
    giphyArray: [],
  };

  async componentDidMount() {
    try {
      let result = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=kUOV7JObAWL2CGRIBtTxqYp6q0uvgroU&q=hamster`
      );

      console.log(result.data.data);

      this.setState({
        giphyArray: result.data.data,
        isLoading: false,
      });

    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <div>....Loading</div> : (
          <div className="container">
            <div className="row">
              <ChildContainer
                giphyArray={this.state.giphyArray}
              />
            </div>
          </div>
        )}
      </div>
    );
  };
};


function ChildContainer(Props) {
  {
    return Props.giphyArray.map((item) => {
      return (
        <div className="col-sm-4" key={item.id}>
          <div className="card">
            <div className="card-body">
              <div>
                <img src={item.images.fixed_width.url} />
              </div>
            </div>
          </div>
        </div>
      );
    })
  }
}