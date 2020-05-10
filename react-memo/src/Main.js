import React, {Component} from "react"
import Table from "./Table"

// Function Componentパターン

const obj = [
  { name: "信之", age: 55 },
  { name: "和恵", age: 48 }
]

// MainComponentで設定したObjectを『Object』と言う変数に格納してTableComponentへ渡す。
class Main extends Component {
  render() {
    return (
      <div id="container">
        <h1>profile list</h1>
        <Table object={obj} />
      </div>
    )
  }
}

export default Main

