import React, { Component } from 'react';
//import { Container, Col, Row } from 'react-bootstrap';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <div className="form-group">
            <h5 className="grey-text text-darken-3">Log In</h5>
            <div className="input-field"></div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter email" className="form-control" id="email" onChange={this.handleChange} />
          </div>
          <div className="form-group">
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" className="form-control" id="password" onChange={this.handleChange} />
          </div>
          </div>
          <div className="form-group">
          <div className="input-field">
            <button className="btn pink lightne-1 z-depth-0">Login</button>
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
