import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    isLoading: true,
    status: [],
  };

  async componentDidMount() {
    const response = await fetch("/api");
    const data = await response.json();
    this.setState({ status: data, isLoading: false });
  }

  render() {
    const { status, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Client Store Server Status</h2>
            Version: {status.version}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
