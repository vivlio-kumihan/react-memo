import React, {Component} from "react"
import Table from "./Table"

// 関数パターン

class Main extends Component {
  render() {
    return (
      <Full_name />
    )
  }
}

const obj = {
  first: "John",
  last: "Lennon"
}
  
const Full_name = () => {
  return (
    <h1>{obj.first} {obj.last}</h1>
  )
}

// Function Componentパターン

class Main extends Component {
  render() {
    const obj = {
      first: "Paul",
      last: "McCartney"
    }
    return (
      <Full_name name={obj}/>
    )
  }
}

const Full_name = (props) => {
  return (
    <h1>{props.name.first} {props.name.last}</h1>
  )
}

export default Main

