import React, {Component} from "react"
import Table from "./Table"



export default Main


// // // ローカル変数を読んで展開するパターン
// // // ClassComponent, FunctionCopmonentを使う意味があまりない。

// class Main extends Component {
//   render() {
//     return (
//       <FullName />
//       )
//     }
//   }
  
// const name = {
//   first: "John",
//   last: "Lennon"
// }
// const FullName = () => {
//   return <h1>{name.first} {name.last}</h1>
// }


// // FunctionComponentをClassComponentに挿して使うのであればこの方法。
// // 肝は、render()内で変数を設定していること。
// // 他所のComponentからpropsを持ってこれるから！
// class Main extends Component {
//   render() {
//     const name = {
//       first: "John",
//       last: "Lennon"
//     }
//     return (
//       <FullName name={name} />
//     )
//   }
// }

// const FullName = (props) => {
//   return <h1>{props.name.first} {props.name.last}</h1>
// }



// const FullName = () => {
// }
// class Main extends Component {
//   render() {
//     return (
//       // <h1>{full_name}</h1>
//       <h1><FullName /></h1>

//     )
//   }
// }
  
// const name = {
//   first: "John",
//   last: "Lennon"
// }

// const FullName = () => {
//   return `${ name.first } ${ name.last }`
// }

// class Main extends Component {
//   render() {
//     const name = {
//       first: "John",
//       last: "Lennon"
//     }
//     return (
//       // <h1>{name.first}</h1>
//       // <FullName name={name} />
//       greet(name)
//     )
//   }
// }

// const greet = (props) => {
//   return (
//     props.name.first
//   )
// }

// const FullName = () => {
//   <h1>{props.name.first} {props.name.last}</h1>
// }


// // Function Componentパターン

// const obj = [
//   { name: "信之", age: 55 },
//   { name: "和恵", age: 48 }
// ]

// // MainComponentで設定したObjectを『Object』と言う変数に格納してTableComponentへ渡す。
// class Main extends Component {
//   render() {
//     return (
//       <div id="container">
//         <h1>profile list</h1>
//         <Table object={obj} />
//       </div>
//     )
//   }
// }