/**
 * @fileOverview Main entry point for build. WebPack will crawl the dependencies used from here on to bundle.
 */
// npm dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// src dependencies
import './three'; // use custom global shim rather than importing THREE directly
import GraphicsEngine from './graphics-engine.js';
import App from './App.jsx';

// create main jsx component and render into #main element
let app = ReactDOM.render(<App />, document.getElementById('main'));
window['app'] = app; // debugging only

// create graphics engine
let canvas = document.getElementById('gfx-canvas'); // created in App.jsx
let gfx = new GraphicsEngine({canvas:canvas});
window['gfx'] = gfx; // debugging only
gfx.start();