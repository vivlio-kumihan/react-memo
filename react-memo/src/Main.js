import React, {Component} from "react"
import Table from "./Table"

class Main extends Component {
  render() {
    const profile = [
      {
        name: "Nobuyuki",
        age: 55
      },
      {
        name: "Kazue",
        age: 48
      },
      {
        name: "Mari",
        age: 23
      },
    ]
    return (
      <Table profile={profile} />
    )
  }
}

export default Main