
import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
      const characters = [
        {
          name: "John Lennon",
          job: "Vocal, Guitar"
        },
        {
          name: "Paul MacCartny",
          job: "Vocal, Bass"
        },
        {
          name: "George Harrison",
          job: "Vocal, Guitar"
        },
        {
          name: "Ringo Starr",
          job: "Vocal, Drums"
        },
      ]

      return (
        <div className="container">
          <Table characterData={ characters } />
        </div>
      )
    }
  }


// class App extends Component {
//   render() {
//     const name = "takahiro"
//     const heading = <h1 className="App">Hello, {name}!</h1>
//     return (
//       <div className="container">
//         { heading }
//         <Table />
//       </div>
//     )
//   }
// }

export default App