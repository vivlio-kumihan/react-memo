import React, { Component } from 'react'

class Form extends Component {
  // constructorを宣言する必要はなくなったそう。
  // まずは、フォームのparamsを設定する。
  initalState = {
    name: "",
    job: "",
    age: "",
  }
  // このComponentの中でstateを持つわけだ。stateってそういうものなのだね。
  state = this.initalState

  // 変更をとり扱う。
  // 入力した際に、value propertyは『initalState』を参照している。
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  // 送信をする関数
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initalState)
  }

  render() {
    const {name, job} = this.state
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" value={age} onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form

// class Form extends Component {
//   // 初期化
//   initialState = {
//     name: '',
//     job: '',
//   }
//   state = this.initialState
//   // 状態をstateさせる
//   handleChange = (event) => {
//     const { name, value } = event.target

//     this.setState({
//       [name]: value,
//     })
//   }
//   submitForm = () => {
//     this.props.handleSubmit(this.state) 
//     this.setState(this.initialState) 
//   }

//   render() {
//     const { name, job } = this.state;
//     return (
//       <form>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           value={name}
//           onChange={this.handleChange} />
//         <label htmlFor="job">Job</label>
//         <input
//           type="text"
//           name="job"
//           id="job"
//           value={job}
//           onChange={this.handleChange} />
//         <input
//           type="button"
//           value="Submit"
//           onClick={this.submitForm} />
//       </form>
//     )
//   }
// }