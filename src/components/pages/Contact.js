import React, { Component } from "react";
import { Container, form, label, textarea, button } from "react-bootstrap";
import Jumbotroncontact from '../../components/layouts/Jumbotroncontact.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="App">
       <Container fluid className="about">
        <Jumbotroncontact />
        <br></br>
        </Container>
        
      <form
        id="contact-form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={this.state.email}
            onChange={this.onEmailChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            value={this.state.message}
            onChange={this.onMessageChange.bind(this)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br></br>
    </div>
  );
}
onNameChange(event) {
  this.setState({ name: event.target.value });
}


onEmailChange(event) {
  this.setState({ email: event.target.value });
}

onMessageChange(event) {
  this.setState({ message: event.target.value });
}

handleSubmit(event) {}
}
export default App;
      
      
    