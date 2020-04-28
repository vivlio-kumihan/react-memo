import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Delete</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() =>
            props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>;
}

const Table = (props) => {
  const { characterData, removeCharacter } = props;
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter} />
    </table>
  )
}

export default Table

// ///////////////////////////////////////////////////
// // case PROPS
// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Job</th>
//       </tr>
//     </thead>
//   )
// }

// const TableBody = props => {
//   const rows = props.characterData.map((row, index) => {
//     return (
//       <tr key={index}>
//         <td>{row.name}</td>
//         <td>{row.job}</td>
//       </tr>
//     )
//   })
//   return <tbody>{rows}</tbody>
// }

// class Table extends Component {
//   render() {
//     const { characterData } = this.props

//     return (
//       <table>
//         <TableHeader />
//         <TableBody characterData={characterData} />
//       </table>
//     )
//   }
// }

// ///////////////////////////////////////////////////
// // SIMPLE COMPONENT
// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Job</th>
//       </tr>
//     </thead>
//   )
// }

// const TableBody = () => {
//   return (
//     <tbody>
//       <tr>
//         <td>Charlie</td>
//         <td>Hanitor</td>
//       </tr>
//       <tr>
//         <td>Mac</td>
//         <td>Bouncer</td>
//       </tr>
//       <tr>
//         <td>Dee</td>
//         <td>Aspring Actress</td>
//       </tr>
//       <tr>
//         <td>Dennis</td>
//         <td>Bartender</td>
//       </tr>
//     </tbody>
//   )
// }

// class Table extends Component {
//   render() {
//     return (
//       <table>
//         <TableHeader />
//         <TableBody />
//       </table>
//     )
//   }
// }

// ///////////////////////////////////////////////////
// // case CLASS COMPORNENT
// class Table extends Component {
//   render() {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Job</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Charlie</td>
//             <td>Hanitor</td>
//           </tr>
//           <tr>
//             <td>Mac</td>
//             <td>Bouncer</td>
//           </tr>
//           <tr>
//             <td>Dee</td>
//             <td>Aspring Actress</td>
//           </tr>
//           <tr>
//             <td>Dennis</td>
//             <td>Bartender</td>
//           </tr>
//         </tbody>
//       </table>
//     )
//   }
// }