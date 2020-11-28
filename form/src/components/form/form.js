import React from "react";

import WebCam from "../webcam/webcam";
import "./form.css";

import { v4 } from "uuid";
const bc = {
  borderColor: "grey",
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    let maskId = null;
    if (props.maskId) {
      maskId = props.maskId;
    } else {
      //generate a random UUID for the purpose of demo if one is not passed in
      maskId = v4();
    }
    this.state = {
      name: "",
      phone: "",
      postCode: "",
      infVac: "",
      isHealthCare: "",
      message: "",
      maskId: maskId,
      image: "",
      result: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
    this.handleInfVacChange = this.handleInfVacChange.bind(this);
    this.handleHWChange = this.handleHWChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.displayStaticInfo = this.displayStaticInfo.bind(this);
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

  displayStaticInfo() {
    if (this.state.postCode.startsWith("48")) {
      this.setState({
        message: `Cairns has a very high incidence of influenza
      Please sanitise hands
      Please wear mask`,
      });
    } else {
      this.setState({ message: "" });
    }
  }
  handleInfVacChange(e) {
    this.setState({
      infVac: e.target.value,
    });
  }
  handleHWChange(e) {
    this.setState({ isHealthCare: e.target.value });
  }
  handleImageChange(img) {
    console.log("image changed");
    this.setState({ image: img });
  }
  resetForm = () => {
    this.setState({ name: "" });
    this.setState({ phone: "" });
    this.setState({ postCode: "" });
    this.setState({ image: "" });
  };
  handleSubmit(e) {
    e.preventDefault();
    let errorMessage = "";
    if (!this.state.name) {
      errorMessage += "Name must be supplied";
    }
    if (!this.state.phone) {
      errorMessage += "Phone must be supplied";
    }
    if (!this.state.postCode) {
      errorMessage += "Post Code must be supplied";
    }
    if (!this.state.infVac) {
      errorMessage += "Vaccination details must be supplied";
    }
    if (!this.state.image) {
      errorMessage += "A photo must be supplied";
    }
    if (!this.state.maskId) {
      errorMessage +=
        "A Mask ID must be supplied - you may need to reload the page by scanning the QR again";
    }

    if (errorMessage && errorMessage.length > 0) {
      alert(`Please correct the following and try again: ${errorMessage}`);
    } else {
      fetch(
        "https://n4xy6udiic.execute-api.ap-southeast-2.amazonaws.com/dev/checkin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.state.name,
            phone: this.state.phone,
            postcode: this.state.postCode, //note in API the C is lower case..
            infVac: this.state.infVac,
            image: this.state.image,
            maskId: this.state.maskId,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("The result from API is ", data);
          this.setState({ result: data.response.success });
          console.log("the result is succesful: ", data.response.success);
          if (data.response.success) {
            //TODO: we should use react to make this a nice message on the screen and clear the form.
            //We don't want them to be able to submit more than once becuase the MaskID must be unique.
            alert(`Thank you for checking in, enjoy your visit!`);
            document.getElementById("myform").reset();
          } else {
            alert(
              `There was a problem checking you in, please see your friendly checkin staff for assistance`
            );
            this.setState({ result: "fail" });
          }
        });
    }
  }

  render() {
    const { postCode, infVac, isHealthCare, message } = this.state;
    return (
      <form
        id="myform"
        onReset={this.resetForm}
        onSubmit={this.handleSubmit}
        className="formborder container"
      >
        <div className="pt-3">
          <label className="row">Name: </label>
          <input
            type="text"
            className="form-control row"
            value={this.state.userName}
            onChange={this.handleNameChange}
          />
        </div>
        <div className=" pt-3">
          <label className="row">Phone: </label>
          <input
            type="tel"
            className="form-control row"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
        </div>
        <div className="pt-3">
          <label className="row">Post Code: </label>
          <input
            type="text"
            className="form-control row"
            value={postCode}
            onChange={this.handlePostCodeChange}
            onBlur={this.displayStaticInfo}
          />
          <p className="row">{message}</p>
        </div>
        <div className=" row my-3 pt-3">
          <label className="col-3"> Influenza Vaccination </label>
          <div className="col-2 yes">
            <label className="col-1"> Yes </label>
            <input
              type="checkbox"
              className="form-control col-1 "
              style={{ outline: "none", marginLeft: 14 }}
              value="yes"
              onChange={this.handleInfVacChange}
            />
          </div>
          <div className="col-2 yes">
            <label className="col-1"> No </label>
            <input
              type="checkbox"
              className="form-control col-1 "
              style={{ outline: "none", marginLeft: 16 }}
              value="no"
              onChange={this.handleInfVacChange}
            />
          </div>
        </div>
        <div className="row my-3 pt-3">
          <label className="col-3"> Are you a healthcare worker </label>
          <div className="col-2 yes">
            <label className="col-1"> Yes </label>
            <input
              type="checkbox"
              className="form-control col-1"
              style={{ outline: "none", marginLeft: 16 }}
              value={isHealthCare}
              onChange={this.handleHWChange}
            />
          </div>
          <div className="col-2 yes">
            <label className="col-1"> No </label>
            <input
              type="checkbox"
              className="form-control col-1"
              style={{ outline: "none", marginLeft: 17 }}
              value={isHealthCare}
              onChange={this.handleHWChange}
            />
          </div>
        </div>
        <WebCam onChange={this.handleImageChange} />
        <div className=" my-3">
          <label className="row"></label>
          <button
            type="submit"
            value="Submit"
            className="btn btn-info btn-block row"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
export default Form;
