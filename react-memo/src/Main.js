import React, { Component } from "react"
import Table from "./Table"
import Form from "./Form"

class Main extends Component {
  state = {
    user: []
  }

  removeMember = (index) => {
    const {user} = this.state
    this.setState ({
      user: user.filter(
        (u, i) => {
          return i !== index
        }
      )
    })
  }

  handleSubmit = (user) => {
    this.setState({
      user: [...this.state.user, user]
    })
  }

  // handleSubmitに紐づいたpropsがやってくる。
  render() {
    const {user} = this.state
    return (
      <div id="container">
        <Table user={user} removeMember={this.removeMember} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Main






// import React, {Component} from "react"
// import Table from "./Table"

// class Main extends Component {
//   // 状態（state）にprops（property）を付けて生成する。
//   state = {
//     user: 
//       [
//         {
//           name: "Nobuyuki",
//           job: 55
//         },
//         {
//           name: "Kazue",
//           job: 48
//         },
//         {
//           name: "Mari",
//           job: 23
//         },
//       ]
//   }


//   removeMember = (index) => {
//     const {user} = this.state
//     this.setState ({
//       user: user.filter((p, i) => {
//         return i !== index
//       })
//     })
//   }

//   render() {
//     const {user} = this.state
//     return (
//       <Table user={user} removeMember={this.removeMember}/>
//     )
//   }
// }


// export default Main