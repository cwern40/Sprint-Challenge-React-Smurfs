import React from 'react';
import axios from 'axios';

class Smurf extends React.Component {
  constructor(props) {
    super(props)
  }

  deleteSmurf = () => {
    const id = this.props.id

    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then((response) => {
        this.props.updateSmurfs(response.data)
      })
      .catch((err) => {
        console.log("Delete Error", err)
      })
  }

  render() {
    return (
      <div className="Smurf">
        <div className="icons">
        <i className="fas fa-trash-alt" onClick={this.deleteSmurf} ></i>
        </div>
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

