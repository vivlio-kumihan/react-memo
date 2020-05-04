import React, { useReducer, Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  render() {
    return (
      <div>
        <h3>Hello, React!</h3>
        <h3>Now, {this.state.date.toLocaleTimeString()}</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)