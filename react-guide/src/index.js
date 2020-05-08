import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

// const element = (
//   <button>
//   {/* <button onClick={activateLasers}> */}
//     Activate Lasers
//   </button>
// )


// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault()
//     console.log("The link was clicked.")
//   }
//   return (
//     <h1>
//       <a href="#" onClick={handleClick}>Click me</a>
//     </h1>
//   )
// }

// ReactDOM.render(
//   <ActionLink />,
//   document.getElementById("root")
// )


// class Toggle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {isToggleOn: true}

//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }))
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "ON" : "OFF"}
//       </button>
//     )
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById("root")
// )