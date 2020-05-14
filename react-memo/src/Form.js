import React, { Component } from 'react'

class Form extends Component {
  // constructorを宣言する必要はなくなったそう。
  // まずは、フォームのparamsを設定する。
  initialState = {
    name: "",
    job: "",
    age: "",
  }
  // このComponentの中でstateを持つわけだ。stateってそういうものなのだね。
  state = this.initialState

  // 編集（新規入力）をとり扱う関数。
  // 入力した際に、value propertyは『initialState』を参照している。
  // 『const { name, value } = event.target』の変数名は絶対にこれでないと
  // 動かない。注意！
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  // 送信をする関数
  submitForm = () => {
    // 『Main.js』で設定した関数へ向けて値が飛んでいく。
    this.props.handleSubmit(this.state)
    // 入力フォームを初期化する。
    this.setState(this.initialState)
  }

  render() {
    const {name, job, age} = this.state
    return (
      // handleChange関数で生成した変数にinputされる値が代入されるイメージ。
      // 『type』『id』はおまけ。
      <form>
        <label htmlFor="name">Name</label>
        <input name="name" value={name} onChange={this.handleChange} type="text" id="name"/>
        <label htmlFor="job">Job</label>
        <input name="job" value={job} onChange={this.handleChange}　 type="text" id="job"/>
        <label htmlFor="age">Age</label>
        <input name="age" value={age} onChange={this.handleChange} type="text" id="age"　/>
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form