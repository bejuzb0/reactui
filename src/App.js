import './App.css';
import MyWebChat from './myWebChat';
import axios from 'axios';

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();

    this.state = {
      token : '5oDRYGF8qdM.p1xbqP9awuRsTVGxfoi5ODhJO1eP9lN0RHCSu5tPxhI'
    }
  }
  componentDidMount() {
    const headers = {
      'Authorization': 'Bearer 5oDRYGF8qdM.p1xbqP9awuRsTVGxfoi5ODhJO1eP9lN0RHCSu5tPxhI'
    }
    
    axios.post('https://directline.botframework.com/v3/directline/tokens/generate', null, {
      headers : headers
    })
    .then((response) => {
      console.log(response);
      this.setState({
        token : response.data.token
      });
    })
    .catch((err) => {
      console.log("Error"+ err);
    })

  }
  
  render() {
    return (
      <div className="webchat">
        <MyWebChat token={this.state.token} />
      </div>
    )
  }
}

export default App;