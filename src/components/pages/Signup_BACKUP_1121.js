import React, { Component } from 'react';

class Signup extends Component {
<<<<<<< HEAD
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''

    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lightne-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
=======
  state = {
    email: '',
    password: '', 
    firstName:'', 
    lastName: ''

  };
  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <div className="form-group">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter email" class="form-control" id="email" onChange={this.handleChange}/>
          </div>
          </div>
          <div className="form-group">
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" class="form-control" id="password" onChange={this.handleChange}/>
          </div>
          </div>
          <div className="form-group">
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="First name" class="form-control" id="firstName" onChange={this.handleChange}/>
          </div>
          </div>
          <div className="form-group">
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="Last name" class="form-control" id="lastName" onChange={this.handleChange}/>
          </div>
          </div>
          <div className="form-group">
          <div className="input-field">
            <button className="btn pink lightne-1 z-depth-0">Sign Up</button>
          </div>
          </div>
        </form>
      </div>
    );
  }
>>>>>>> 606a00e8fad9bec05e9a0a5e56f27da12435732c
}

export default Signup;
