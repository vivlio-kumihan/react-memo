import React, {Component} from "react"

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>信之</td>
            <td>55</td>
          </tr>
          <tr>
            <td>和恵</td>
            <td>48</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table