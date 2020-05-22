// import React, {Component} from "react"
// import Table from "./Table"
// import Form from "./Form"

// class Main extends Component {
//   state = {
//     user: [
//       {
//         name: "takahiro",
//         age: "55",
//         job: "designer"
//       }
//     ]
//   }

//   handleSubmited = (new_user) => {
//     this.setState({
//       user: [...this.state.user, new_user]
//     })
//   }

//   removeUser = (index) => {
//     const {user} = this.state
//     this.setState({
//       user: user.filter((u, i) => {
//         return i !== index
//       })
//     })
//   }

//   render() {
//     const {user} = this.state
//     return (
//       <div>
//         <Table  user={user}
//                 removeUser={this.removeUser}/>
//         <Form handleSubmit={this.handleSubmited} />
//       </div>
//     )
//   }
// }

// export default Main








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

  // ページの『今』の『state（状態）』は常にここにある。
  // 『state』を更新するには、『setState』するルール。
  // 配列の1番目の要素には、今の『state』
  // 配列の2番目の要素には、追加する『value』
  // 以下のようにして新規で追加していく構文は暗記。
  handleSubmited = (new_user) => {
    this.setState({
      user: [...this.state.user, new_user]
    })
  }

  // handleSubmitに紐づいたpropsがやってくる。
  // つまり、新規追加分のuser。
  // customRuleとして新規作成についての関数名は、
  // 受け側の（Main.js）では受動態、
  // 送信側の（Form.js）では能動態で命名する。
  render() {
    const {user} = this.state
    return (
      <div id="container">
        <Table user={user} removeMember={this.removeMember} />
        <Form handleSubmit={this.handleSubmited} />
      </div>
    )
  }
}

export default Main