import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import anime from 'animejs';

var lineDrawing = function(){
  anime({
    targets: '.App-header .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 3000 },
    direction: 'alternate',
    loop: true
  });
  }

ReactDOM.render(
    <App />,
  document.getElementById('root'),
  lineDrawing
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
