import React from "react";
import Webcam from "react-webcam";

const h = {
  height: 100,
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

  /* capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  render() {
    return (
      <div>
        <Webcam value={this.state.snapShot} onChange={this.takeScreenShot} />
      </div>
    );
  } */
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
        <div className="row">
          <label className="col-3 pt-3 my-3">Picture: </label>
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={550}
            videoConstraints={videoConstraints}
            className="col-5"
          />
          <button
            type="button"
            className="col-2 my-3 pt-3"
            onClick={this.capture}
            style={h}
          >
            Capture photo
          </button>
        </div>
        <div className="row">
          <label className="col-3"></label>
          <img className="col-5" src={this.state.image} />
        </div>
      </div>
    );
  }
}

export default WebCam;
