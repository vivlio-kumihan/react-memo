import React, {Component} from "react"
import Table from "./Table"

// // #01
// class App extends Component {
//   render() {
//     return (
//       <h1>Hello, <FormatName /></h1>
//       /* <h1>Hello, {FormatName()}</h1> */
//     )
//   }
// }

// const FormatName = () => {
//   return `${full_name.first} ${full_name.last}`
// }

// const full_name = {
//   first: "John",
//   last: "Lennon"
// }


// // #02
// class Main extends Component {
//   render() {
//     return (
//       <div id="container">
//         <h1>profile list</h1>
//         <Table />
//       </div>
//     )
//   }
// }


// // #03
// class Main extends Component {
//   render() {
//     const object = [
//       {
//         name: "信之",
//         age: 55,
//       }, {
//         name: "和恵",
//         age: 48,
//       }, {
//         name: "茉李",
//         age: 23,
//       }
//     ]
//     return (
//       // 指定したprops名『profiles』が大事。
//       // 名前をそのままhandlingする。
//       <div id="container">
//         <h1>Profile List</h1>
//         <Table profiles={object} />
//       </div>
//     )
//   }
// }


// #04
class Main extends Component {
  state = [
    {
      name: "信之",
      age: 55,
    }, {
      name: "和恵",
      age: 48,
    }, {
      name: "茉李",
      age: 23,
    }
  ]

  removeProfile = (index) => {
    const {objects} = this.state
    this.setState({
      objects: objects.filter((object, i) => {
        return i !== index
      })
    })
  }

  render() {
    const {objects} = this.state
    return (
      <div id="container">
        <h1>Profile List</h1>
        <Table 
          profiles={objects}
          removeProfile={this.removeProfile} />
      </div>
    )
  }
}

export default Main

