import React from "react";

import WebCam from "../webcam/webcam";
import "./form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", phone: "", postCode: "", errors: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      userName: e.target.value,
    });
  }
  handlePhoneChange(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  handlePostCodeChange(e) {
    this.setState({
      postCode: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(
      `Hello, you have the following details on the form ${this.state.userName} \n ${this.state.phone} \n ${this.state.postCode}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="formborder">
        <div className="row pt-3 my-3">
          <label className="col-3">Name: </label>
          <input
            type="text"
            className="form-control col-5"
            value={this.state.userName}
            onChange={this.handleNameChange}
          />
        </div>
        <div className="row my-3 pt-3">
          <label className="col-3">Phone: </label>
          <input
            type="tel"
            className="form-control col-5"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
        </div>
        <div className="row my-3 pt-3">
          <label className="col-3">Post Code: </label>
          <input
            type="text"
            className="form-control col-5"
            value={this.state.postCode}
            onChange={this.handlePostCodeChange}
          />
        </div>
        <WebCam />
        <div className="row centered">
          <button type="submit" value="Submit" className="btn btn-info col-5">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
export default Form;
