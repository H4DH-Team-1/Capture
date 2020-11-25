import React from "react";

import WebCam from "../webcam/webcam";
import "./form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      postCode: "",
      maskId: "xyz",
      image: "",
      result: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount() {}

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
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

  handleImageChange(img) {
    console.log("image changed");
    this.setState({ image: img });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(
      `Hello, you have the following details on the form ${this.state.name} \n ${this.state.phone} \n ${this.state.postCode}`
    );
    // Simple POST request with a JSON body using fetch
    fetch(
      "https://n4xy6udiic.execute-api.ap-southeast-2.amazonaws.com/dev/checkin",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          phone: this.state.phone,
          postCode: this.state.postCode,
          image: this.state.image,
          maskId: this.state.maskId,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ result: data.success });
        console.log("the result is", this.state.result);
        console.log("The result from API is ", data.body);
      });
  }

  render() {
    const { postCode } = this.state;
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
            value={postCode}
            onChange={this.handlePostCodeChange}
          />
        </div>
        <WebCam onChange={this.handleImageChange} />
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
