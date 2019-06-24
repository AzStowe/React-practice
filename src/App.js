import React, { Component } from "react"
import "./App.css"

class App extends Component {
  state = {
    label: "Party!!!"
  }

  handleChange = event => {
    this.setState({
      label: event.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.label}</h1>
        <input value={this.state.label} onChange={this.handleChange} />
      </div>
    )
  }
}

export default App
