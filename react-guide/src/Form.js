// //////////////////////////////////////
// // # 01
// // ## 状態を保存することについて

// import React, { Component } from "react"

// class Form extends Component {
//   constructor(props) {
//     super(props)
//     // valueという変数を初期化する
//     this.state = {value: ''}
//     // 2つの関数を初期化する
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   // 関数定義
//   // 『onChange』をトリガーにしてその状態に含まれるインスタンスの処理
//   handleChange = (event) => {
//     this.setState({
//       value: event.target.value
//     })
//   }
//   // 『handleSubmit』をトリガーにしてその状態に含まれるインスタンスの処理
//   // 『preventDefault』は、
//   // 例えば、クリックなどのイベントは子要素から親要素に伝搬される。
//   // その後、クリックのイベントはそのまま何もして欲しくない、
//   // 状態を持っていて欲しくないので、event.preventDefaultによって、
//   // その要素のイベントをキャンセルするという仕様。
//   handleSubmit = (event) => {
//     alert(`A Name was submitted: ${this.state.value}`)
//     event.preventDefault()
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           name:
//           <input  type="text" 
//                   value={this.state.value}
//                   onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }

// export default Form

// //////////////////////////////////////
// // # 02
// // Reactの『textarea』タグ
// // textareaの利用例というぐらいのコード

// import React, { Component } from "react"

// class Form extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: "このtextareaに何か書いてみてね。"
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange = (event) => {
//     this.setState(
//       { value: event.target.value }
//     )
//   }

//   handleSubmit = (event) => {
//     alert(`記入された内容: ${this.state.value}`)
//     event.preventDefault()
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Contents:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }

// export default Form


// ////////////////////////////////////
// // # 03
// // 『select』タグ
// // 『value』のHandringに注目

// import React, { Component } from "react"

// class Form extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // 初期化される『value』とは『タグの中』の『value』と結びついている。
//       // それとは別に、ここで設定しているとデフォルトの画面で選択肢の表に表示される。
//       // ここの『value』は『property』だよ。
//       value: "apple"
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange = (event) => {
//     this.setState(
//       { value: event.target.value }
//     )
//   }

//   handleSubmit = (event) => {
//     alert(`Your selected fruit: ${this.state.value}`)
//     event.preventDefault()
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite fruit:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="lime">Lime</option>
//             <option value="apple">Apple</option>
//             <option value="banana">Banana</option>
//             <option value="orange">Orange</option>
//             <option value="strawberry">Strawberry</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }

// export default Form

////////////////////////////////////
// # 04
// 『select』タグ
// 『value』のHandringに注目

import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 初期化される『value』とは『タグの中』の『value』と結びついている。
      // それとは別に、ここで設定しているとデフォルトの画面で選択肢の表に表示される。
      // ここの『value』は『property』だよ。
      value: "apple"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState(
      { value: event.target.value }
    )
  }

  handleSubmit = (event) => {
    alert(`Your selected fruit: ${this.state.value}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite fruit:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="lime">Lime</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="strawberry">Strawberry</option>
          </select>
          <input type="file" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form
