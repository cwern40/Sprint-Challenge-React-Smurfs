import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // getting the smurf data from the smurf api
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then((response) => {
        this.setState({ smurfs: response.data})
      })
      .catch((err) => {
        console.log("Error", err)
      })
  }

  updateSmurfs = (smurfs) => {
    this.setState({ smurfs })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink className="main-nav" to="/" exact>Home</NavLink>
          <NavLink className="main-nav" to="/smurfs-form" exact>Create New</NavLink>
        </nav>
        <Route path="/smurfs-form" exact render={() => <SmurfForm updateSmurfs={this.updateSmurfs} />} />
        <Route path="/" exact render={() => <Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
