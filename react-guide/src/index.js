import React, { useReducer, Component } from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import './assets/css/reset.css'
import './assets/css/index.css'
import './assets/css/custom.css'

const element = <App />

ReactDOM.render (
  element,
  document.getElementById("root")
)