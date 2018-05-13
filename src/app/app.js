import React, { Component } from 'react';
import logo from '../static/images/GoodJob.png'

class App extends Component {
    render() {
      return (
          <div>
              <img src={logo} alt="logo" />
        <div>Simple React Application</div> 
        </div>
      )
    }
}
export default App;
