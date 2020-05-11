import React from "react"
import ReactDOM from "react-dom"
import Main from "./Main"
import "./assets/css/index.css"
import "./assets/css/custom.css"

const element = (
  <div id="container"><Main /></div>
)

ReactDOM.render(
  element,
  document.getElementById("root")
)