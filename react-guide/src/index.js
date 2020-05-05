import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

////////////
// // #01
// function tick() {
//   const element = (
//     <h1>{new Date.toLocaleTimeString()}</h1>
//     )
//   ReactDOM.render(
//     element,
//     document.getElementById("root")
//   )
// }

// setInterval(tick, 1000)


////////////
// // #02
// function Clock(props) {
//   return (
//     `${ props.date.toLocaleTimeString() }`
//   )
// }

// function tick() {
//   ReactDOM.render(
//     <h1><Clock date={new Date()} /></h1>,
//     document.getElementById("root")
//   )
// }

// setInterval(tick, 1000)

// class Clock extends React.Component {
//   render() {
//     return (
//       `${this.props.date.toLocaleTimeString()}`
//     )
//   }
  
// }

// function tick() {
//   ReactDOM.render(
//     <h1><Clock date={new Date()}/></h1>,
//     document.getElementById("root")
//   )
// }

// setInterval(tick, 1000)