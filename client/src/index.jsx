import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

window.ImageCarousel = App;
render(<App />, document.getElementById('Images') || document.createElement('div'));