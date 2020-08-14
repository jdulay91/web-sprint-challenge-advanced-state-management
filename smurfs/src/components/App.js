import React, { Component } from "react";
import "./App.css";
import AddSmurf from "./AddSmurf";
import SmurfList from "./SmurfList";
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <AddSmurf/>
        <SmurfList/>     

      </div>
    );
  }
}

export default connect(null, {})(App);
