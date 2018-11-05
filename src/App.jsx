import './tachyons/css/tachyons.min.css';
import "./_globals/_colors.css";

import './App.css';

import React, { Component } from 'react';
// importations d'icones
// import { ReactComponent as LogoDark } from "./assets/on_platform_logo_dark.svg";

// importations d'images
// import avatar from "./assets/avatar.png";

class App extends Component {
  render() {
    return <div className="App">
        <div class="pa4">
            <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
                <p class="f5 f4-m f3-l lh-copy measure mt0">
                    Discipline in typography is a prime virtue. Individuality
                    must be secured by means that are rational. Distinction
                    needs to be won by simplicity and restraint. It is equally
                    true that these qualities need to be infused wiht a
                    certain spirit and vitality, or they degenerate into
                    dullness and mediocrity.</p>
                <cite class="f6 ttu tracked fs-normal">―Stanley Morison</cite>
            </blockquote>
        </div>
      </div>;
  }
}

export default App;
