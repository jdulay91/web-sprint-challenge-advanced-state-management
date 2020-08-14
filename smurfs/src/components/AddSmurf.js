import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
      id: new Date(),
    };
    this.props.addSmurf(newSmurf);
  }
  render() {
    return (<form onSubmit={this.onSubmit}>
        <label> Name </label> 
        <input name="name" type="text" value={this.state.name} onChange={this.onChange}/>
        <label> Age </label>
        <input name="age" type="text" value={this.state.age} onChange={this.onChange}/>
        <label> Height </label>
        <input name="height" type="text" value={this.state.height} onChange={this.onChange}/>
        <br/>
        <button type="submit">Add Smurf</button>
    </form>);
  }
}

export default connect(null, { addSmurf })(AddSmurf);
