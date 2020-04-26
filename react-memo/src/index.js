import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// // case CLASS COMPORNENT
// class App extends Component {
//   render() {
//     const name = "takahiro"
//     const heading = <h1 className="cst-head">Hello, { name }!</h1>
//     return (
//       <div>
//         { heading }
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, React!</h1>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'))