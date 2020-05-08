import React, {Component} from "react"

// ＃04
class Table extends Component {
  render() {
    const {profiles} = this.props
    return (
      <table>
        <TableHeader />
        <TableBody obj={profiles}/>
      </table>
    )
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>name</th>
        <th>age</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.obj.map((row, index) => {
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


// // ＃02
// class Table extends Component {
//   render() {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>name</th>
//             <th>age</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>信之</td>
//             <td>55</td>
//           </tr>
//           <tr>
//             <td>和恵</td>
//             <td>48</td>
//           </tr>
//           <tr>
//             <td>茉李</td>
//             <td>23</td>
//           </tr>
//         </tbody>
//       </table>
//     )
//   }
// }


// // ＃03
// // Componentは、他所のComponentで継ぎ足された(渡された)propsを感知する。
// class Table extends Component {
//   render() {
//     // handlingするpropsを変数に格納する場合、
//     // ES6 propertyの略記法に従い{}で包む。
//     // そして、それをJSXで展開する。
//     // なお、Mainで指定したprops名『profiles』が大事。
//     // ここが肝
//     const {profiles} = this.props
//     return (
//       <table>
//         <TableHeader />
//         <TableBody obj={profiles}/>
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

// // 引数がpropsの無名関数を格納する。
// // <tr>タグのkey={index}は付けなくても問題ない。
// const TableBody = (props) => {
//   const rows = props.obj.map((row, index) => {
//     return (
//       <tr key={index}>
//         <td>{row.name}</td>
//         <td>{row.age}</td>
//       </tr>
//     )
//   })
//   return <tbody>{rows}</tbody>
// }

export default Table