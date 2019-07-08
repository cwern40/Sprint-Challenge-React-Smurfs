import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  editSmurf = event => {
    event.preventDefault();
    const { name, age, height} = this.state;
    const payload = { name, age, height};
    const id = this.props.match.params.id;

    axios.put(`http://localhost:3333/smurfs/${id}`, payload)
      .then((response) => {
        this.props.updateSmurfs(response.data)
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log("Add Error", err)
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="SmurfForm">
        <form onSubmit={this.editSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
