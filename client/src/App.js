import React, { Component } from 'react';


class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({
        data: res.express
      }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/weather');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };





  render() {
    return (
      <div className="App">
        <p className='App-intro'>{this.state.data}</p>
      </div>
    );
  }
}

export default App;
