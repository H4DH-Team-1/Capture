import React from "react";
import Webcam from "react-webcam";

const h = {
  height: 90,
  top: 30,
};
class WebCam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: "" };
    this.takeScreenShot = this.takeScreenShot.bind(this);
  }

  takeScreenShot(e) {
    e.preventDefault();
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ image: imageSrc });
    this.props.onChange(imageSrc);
    return false;
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user",
    };

    return (
      <div>
        <label className="row">Picture: </label>
        <div class="row">
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={550}
            videoConstraints={videoConstraints}
            className="col-6"
          />
          <button
            type="button"
            className="col-3"
            onClick={this.capture}
            style={h}
          >
            Capture photo
          </button>
        </div>
        <div className="row">
          <img className="col-6" src={this.state.image} />
        </div>
      </div>
    );
  }
}

export default WebCam;
