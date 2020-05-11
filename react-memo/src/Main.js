import React, {Component} from "react"
import Table from "./Table"

class Main extends Component {
  // 状態（state）にprops（property）を付けて生成する。
  state = {
    profile: 
      [
        {
          name: "Nobuyuki",
          age: 55
        },
        {
          name: "Kazue",
          age: 48
        },
        {
          name: "Mari",
          age: 23
        },
      ]
  }

  // メソッド定義　propertyを削除用
  // classの中でメソッド定義は、constを付けなくてもいいよう。
  // Ruby的でいい。
  // 『index』はキーワードではない。ハンドリングを考慮し、
  // TableComponentで付与し、
  // MainComponentへ送り出した変数名に従っているだけ。
  removePerson = (index) => {
    // stateはプライベートみたいだ。
    // 必要なその場その場でインスタンス化（props化）している。
    const {profile} = this.state.profile
    // propertyを削除する理屈が解ってない。なんでDeleteできるの？
    this.setState ({
      profile: profile.filter((p, i) => {
        return i !== index
      })
    })
  }

  render() {
    const {profile} = this.state
    return (
      <Table profile={profile} removePerson={this.removePerson}/>
    )
  }
}

export default Main