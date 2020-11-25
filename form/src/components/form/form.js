import React from "react";

import WebCam from "../webcam/webcam";
import "./form.css";

import { v4 } from "uuid";

class Form extends React.Component {
  constructor(props) {
    super(props);
    let maskId = null;
    if (props.maskId)
    {
      maskId = props.maskId;
    }
    else
    {
      //generate a random UUID for the purpose of demo if one is not passed in
      maskId = v4(); 
    }
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
    let errorMessage = '';
    if (!this.state.name)
    {
      errorMessage += 'Name must be supplied';
    }
    if (!this.state.phone)
    {
      errorMessage += 'Phone must be supplied';
    }
    if (!this.state.postCode)
    {
      errorMessage += 'Post Code must be supplied';
    }
    if (!this.state.image)
    {
      errorMessage += 'A photo must be supplied';
    }
    if (!this.state.maskId)
    {
      errorMessage += 'A Mask ID must be supplied - you may need to reload the page by scanning the QR again';
    }

    if (errorMessage && errorMessage.length > 0)
    {
      alert(`Please correct the following and try again: ${errorMessage}`);
    }
    else{
      fetch(
      "https://n4xy6udiic.execute-api.ap-southeast-2.amazonaws.com/dev/checkin",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          phone: this.state.phone,
          postcode: this.state.postCode, //note in API the C is lower case..
          image: this.state.image,
          maskId: this.state.maskId,
        }),
      }
    )
    .then((response) => response.json())
    .then((data) => {
        this.setState({ result: data.reponse.success });
        console.log("the result is succesful: ", this.state.result);
        console.log("The result from API is ", JSON.stringify(data));
        if (this.state.result)
        {
          //TODO: we should use react to make this a nice message on the screen and clear the form.
          //We don't want them to be able to submit more than once becuase the MaskID must be unique.
          alert(`Thank you for checking in, enjoy your visit!`);
        }
        else
        {
          alert(`There was a problem checking you in, please see your friendly checkin staff for assistance`);
        }
      });
    }
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
