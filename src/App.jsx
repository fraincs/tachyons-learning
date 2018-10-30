import './tachyons/css/tachyons.min.css';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div className="App">
        <div className="grid">
            <div className="content">
                <p>Content</p>
            </div>
            <div className="sidebar">
                <p>Sidebar</p>
            </div>
        </div>
      </div>;
  }
}

export default App;
