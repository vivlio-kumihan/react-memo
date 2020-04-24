
import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    const name = "takahiro"
    const heading = <h1 className="App">Hello, {name}!</h1>
    return (
      <div className="container">
        { heading }
        <Table />
      </div>
    )
  }
}

export default App