import React from "react"

const Table = (props) => {
  const {user, removeUser} = props
  return (
    <table>
      <TableHeader />
      <TableBody user={user} removeUser={removeUser} />
    </table>
  )
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.user.map((u, index) => {
    return (
      <tr>
        <td>{u.name}</td>
        <td>{u.job}</td>
        <td>
          <button onClick={() => props.removeUser(index)}>delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

export default Table

// import React, {Component} from "react"

// const Table = (props) => {
//   const {profile, removePerson} = props
//   return (
//     <table>
//       <TableHeader />
//       <TableBody  profile={profile}
//                   removePerson={removePerson} />
//     </table>
//   )
// }

// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Delete</th>
//       </tr>
//     </thead>
//   )
// }

// // buttonタグの箇所、propsを代入している。
// // ここで無名関数を展開できる！　素敵だ。
// const TableBody = (props) => {
//   const rows = props.profile.map((row, index) => {
//     return (
//       <tr key={index}>
//         <td>{row.name}</td>
//         <td>{row.age}</td>
//         <td>
//           <button onClick={() => props.removePerson(index)}>Delete</button>
//         </td>
//       </tr>
//     )
//   })
//   return (
//     <tbody>{rows}</tbody>
//   )
// }

// export default Table