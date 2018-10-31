import "./tachyons/css/tachyons.min.css";
import "./_globals/_colors.css";

import './App.css';

import React, { Component } from 'react';

// importations des icones
import { ReactComponent as LogoDark } from "./assets/on_platform_logo_dark.svg";
import { ReactComponent as Magnifier } from "./assets/magnifier.svg";
import { ReactComponent as Shuffle } from "./assets/shuffle.svg";
import { ReactComponent as Radio } from "./assets/radio.svg";
import { ReactComponent as ThumbUp } from "./assets/thumb-up.svg";
import { ReactComponent as ThumbDown } from "./assets/thumb-down.svg";
import { ReactComponent as ThreeDots } from "./assets/three-dots.svg";

import avatar from "./assets/avatar.png";
import lostInTheDream from "./assets/lost-in-the-dream.jpg";
import aDeeperUnderstanding from "./assets/a-deeper-understanding.jpg";

class App extends Component {
  render() {
    return <div className="App bg-near-black">
        <div className="header ph3 h3 f3 flex justify-between items-center">
            <div className="logo">
                <LogoDark></LogoDark>
            </div>
            <div className="actions">
                <a href="#0" className="white ph3 lh-solid glow no-underline o-70">Home</a>
                <a href="#0" className="white ph3 lh-solid glow no-underline o-70">Hotlist</a>
                <a href="#0" className="white ph3 lh-solid glow no-underline o-70">Library</a>
                <a href="#0" className="white ph3 lh-solid glow no-underline o-70"><Magnifier className="w2 fill-white mr2"></Magnifier>Search</a>
            </div>
            <div className="avatar w2"><img src={avatar} className="br-100 ba bw1 b--red" alt="My Avatar"/></div>
        </div>
        <div className="info-pane pt7 pb4 ph4">
            <div className="center mw9 z-1 relative">
                <h1 className="white f1 lh-solid ma0 mb3">The War On Drugs</h1>
                <a className="red no-underline ttu lh-solid" href="#0">SUBSCRIBE 46k</a>
                <p className="ma0 mv3 white mw7">The War on Drugs is an American indie rock band from Philadelphia, Pennsylvania, formed in 2005. The band consists of Adam Granduciel, David Hartley, Robbie Bennett, Charlie …</p>
                <a href="#0" className="no-underline ttu white dib mb3">More</a>
                <div className="info-actions">
                    <button className="bg-white bn br1 pv2 ph3 ttu fw6 w4 mr2 outline-0"><Shuffle className="mr1 w1"></Shuffle>Shuffle</button>
                    <button className="bg-white bn br1 pv2 ph3 ttu fw6 w4 outline-0"><Radio className="mr1 w1"></Radio>Radio</button>
                </div>
            </div>
        </div>
        <div className="control-pane">
            <div className="center mw9 pt5">
                <h2 className="lh-solid white mb3">Songs</h2>
                <div className="song-list">
                    <div className="song w-100 flex flex-columns items-center bb b--white-30 pa2">
                        <div className="flex flex-grow-1">
                            <span class="w2 ml3"></span>
                            <span className="flex-grow-1 song-title w-33 white f6 fw5 i">Title</span>
                            <span className="flex-grow-1 song-artist w-33 white f6 fw5 o-70 i">Artist</span>
                            <span className="flex-grow-1 song-album white w-33 f6 fw5 o-70 i">Album</span>
                            <span className="actions-col"></span>
                        </div>
                        <div className="song-actions flex items-center"></div>
                    </div>
                    <div className="song bg-animate hover-bg-white-10 w-100 flex flex-columns items-center bb b--white-30 pa2">
                        <div className="song-album-cover">
                            <img src={lostInTheDream} alt="Lost in The Dream" className="w2 db mr3" />
                        </div>
                        <div className="flex flex-grow-1">
                            <span className="flex-grow-1 song-title w-33 white fw5">Under The Pressure</span>
                            <span className="flex-grow-1 song-artist w-33 white fw5 o-70">The War on Drugs</span>
                            <span className="flex-grow-1 song-album white w-33 fw5 o-70">Lost In The Dream</span>
                        </div>
                        <div className="song-actions flex items-center">
                            <ThumbUp className="fill-white op-70 mr3"></ThumbUp>
                            <ThumbDown className="fill-white op-70 mr3"></ThumbDown>
                            <ThreeDots></ThreeDots>
                        </div>
                    </div>
                    <div className="song bg-animate hover-bg-white-10 w-100 flex flex-columns items-center bb b--white-30 pa2">
                        <div className="song-album-cover">
                            <img src={aDeeperUnderstanding} alt="Lost in The Dream" className="w2 db mr3" />
                        </div>
                        <div className="flex flex-grow-1">
                            <span className="flex-grow-1 song-title w-33 white fw5">Pain</span>
                            <span className="flex-grow-1 song-artist w-33 white fw5 o-70">The War on Drugs</span>
                            <span className="flex-grow-1 song-album white w-33 fw5 o-70">A Deeper Understanding</span>
                        </div>
                        <div className="song-actions flex items-center">
                            <ThumbUp className="fill-white op-70 mr3"></ThumbUp>
                            <ThumbDown className="fill-white op-70 mr3"></ThumbDown>
                            <ThreeDots></ThreeDots>
                        </div>
                    </div>
                    <div className="song bg-animate hover-bg-white-10 w-100 flex flex-columns items-center bb b--white-30 pa2">
                        <div className="song-album-cover">
                            <img src={lostInTheDream} alt="Lost in The Dream" className="w2 db mr3" />
                        </div>
                        <div className="flex flex-grow-1">
                            <span className="flex-grow-1 song-title w-33 white fw5">Red Eyes</span>
                            <span className="flex-grow-1 song-artist w-33 white fw5 o-70">The War on Drugs</span>
                            <span className="flex-grow-1 song-album white w-33 fw5 o-70">Lost In The Dream</span>
                        </div>
                        <div className="song-actions flex items-center">
                            <ThumbUp className="fill-white op-70 mr3"></ThumbUp>
                            <ThumbDown className="fill-white op-70 mr3"></ThumbDown>
                            <ThreeDots></ThreeDots>
                        </div>
                    </div>
                </div>
                <a href="#0" className="white f6 o-70 ttu no-underline mt3 dib">Show All</a>
            </div>
        </div>
        <div className="control-pane">
            <div className="center mw9 pt5">
                <h2 className="lh-solid white ma0 pb5">Albums</h2>
            </div>
        </div>
      </div>;
  }
}

export default App;

