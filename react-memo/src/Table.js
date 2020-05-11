import React, {Component} from "react"

class Table extends Component {
  render() {
    const {profile} = this.props
    return (
      <table>
        <TableHeader />
        <TableBody profile={profile} />
      </table>
    )
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.profile.map((row, indes) => {
    return (
      <tr>
        <td>{row.name}</td>
        <td>{row.age}</td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

export default Table


// // MainComponentからの『Object』をTableComponentで使えるpropへと変換して渡す。
// class Table extends Component {
//   render() {
//     const {object} = this.props
//     return (
//       <table>
//         <TableHeader />
//         <TableBody profile={object} />
//       </table>
//     )
//   }
// }

// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>name</th>
//         <th>age</th>
//       </tr>
//     </thead>
//   )
// }

// // 配列やオブジェクトを展開してレンダリングする方法。
// const TableBody = (props) => {
//   const rows = props.profile.map((row, index) => {
//     return (
//       <tr>
//         <td>{row.name}</td>
//         <td>{row.age}</td>
//       </tr>
//     )
//   })
//   return (<tbody>{rows}</tbody>)
// }